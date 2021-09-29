export function initializeValidation() {
  var App = window.App || {};
  var Validation = {
    isCompanyEmail: function (email) {
      return /.+@starfleet\.com$/.test(email);
    },
  };
  App.Validation = Validation;
  window.App = App;
}
