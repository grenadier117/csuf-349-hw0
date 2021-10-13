import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, setDoc } from 'firebase/firestore/lite';
import { firebaseConfig } from './firebaseconfig';

export function initializeFirebase() {
  var App = window.App || {};
  var $ = window.jQuery;

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

  FirebaseDataStore.prototype.get = async function (email, cb) {
    const docRef = this.db.collection(`orders`);
    const snapshot = await docRef.where('emailAddress', '==', email).get();
    return await snapshot.docs.map(e => e.data());
  };

  FirebaseDataStore.prototype.getAll = async function (cb) {
    console.info('@JAKE - DB', this.db);
    const docRef = collection(this.db, `orders`);
    console.info('@JAKE - doc ref', docRef);
    const snapshot = await getDocs(docRef);
    return await snapshot.docs.map(e => e.data());
  };

  FirebaseDataStore.prototype.remove = async function (email) {
    const docRef = await collection(this.db, `orders`);
    const batch = this.db.batch();
    const snapshot = await docRef.where('emailAddress', '==', email).get();
    snapshot.forEach(doc => {
      batch.delete(doc.ref);
    });
    await batch.commit();
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
