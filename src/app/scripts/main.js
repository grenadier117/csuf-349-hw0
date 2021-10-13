export function initializeMain(navigateToPayment) {
  var App = window.App;
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  // var SERVER_URL = 'http://coffeerun-v2-rest-api.herokuapp.com/api/coffeeorders';
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  // var RemoteDataStore = App.RemoteDataStore;
  var FirebaseDataStore = App.FirebaseDataStore;
  var datastore = new FirebaseDataStore();
  console.info('@JAKE - datastore', datastore);
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  // var remoteDS = new RemoteDataStore(SERVER_URL);
  var myTruck = new Truck('ncc-1701', datastore);
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function (data) {
    // TODO: Don't create order until payment is made
    return myTruck.createOrder.call(myTruck, data).then(function () {
      checkList.addRow.call(checkList, data);
      window.App.editingOrder = data.emailAddress;
      navigateToPayment();
    });
  });

  formHandler.addInputHandler(Validation.isCompanyEmail);
  myTruck.printOrders(checkList.addRow.bind(checkList));
  console.log(formHandler);
}
