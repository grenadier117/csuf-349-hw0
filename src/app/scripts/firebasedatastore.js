import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc, where, query, deleteDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseconfig';

export function initializeFirebase() {
  var App = window.App || {};

  function FirebaseDataStore() {
    console.log('running the FireBaseDataStore function');
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);
  }

  FirebaseDataStore.prototype.add = async function (key, val) {
    console.log('firebase add  ');
    const docRef = doc(this.db, `orders/${makeDocHash(20)}`);
    return setDoc(docRef, val);
  };

  FirebaseDataStore.prototype.get = async function (email) {
    const docRef = collection(this.db, `orders`);
    const q = query(docRef, where('emailAddress', '==', email));
    const snapshot = await getDocs(q);
    return await snapshot.docs.map(e => e.data());
  };

  FirebaseDataStore.prototype.getAll = async function () {
    const docRef = collection(this.db, `orders`);
    const snapshot = await getDocs(docRef);
    return await snapshot.docs.map(e => e.data());
  };

  FirebaseDataStore.prototype.remove = async function (email) {
    const docRef = collection(this.db, `orders`);
    const q = query(docRef, where('emailAddress', '==', email));
    const snapshot = await getDocs(q);
    snapshot.forEach(d => {
      deleteDoc(d.ref);
    });
  };

  function makeDocHash(len) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < len; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  App.FirebaseDataStore = FirebaseDataStore;
  window.App = App;
}
