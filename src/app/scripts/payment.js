export function initializePayment(navigateBack) {
  const PAYMENT_SELECTOR = '[data-payment-order="form"]';
  let App = window.App;
  let FormHandler = App.FormHandler;
  let formHandler = new FormHandler(PAYMENT_SELECTOR);
  formHandler.addSubmitHandler(data => {
    return window.myTruck.addPayment(window.App.editingOrder, data).then(() => {
      navigateBack();
    });
  });
}

export function openModal() {
  var $ = window.jQuery;
  $('#ex1').modal();
}
