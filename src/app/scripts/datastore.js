export function initialize() {
  var App = window.App || {};
  var Promise = window.Promise;

  function DataStore() {
    this.data = {};
  }

  function promiseResolvedWith(value) {
    var promise = new Promise(function (resolve, reject) {
      resolve(value);
    });
    return promise;
  }

  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
    return promiseResolvedWith(null);
  };

  DataStore.prototype.addPayment = function (key, val) {
    this.data[key] = { ...this.data[key], ...val };
    return promiseResolvedWith(null);
  };

  DataStore.prototype.get = function (key) {
    return promiseResolvedWith(this.data[key]);
  };

  DataStore.prototype.getAll = function () {
    return promiseResolvedWith(this.data);
  };

  DataStore.prototype.remove = function (key) {
    delete this.data[key];
    return promiseResolvedWith(null);
  };

  App.DataStore = DataStore;
  window.App = App;
}

// (function (window) {
//   var App = window.App || {};
//   function DataStore() {
//     this.data = {};
//   }

//   DataStore.prototype.add = function (key, val) {
//     this.data[key] = val;
//   };

//   DataStore.prototype.get = function (key) {
//     return this.data[key];
//   };

//   DataStore.prototype.getAll = function () {
//     return this.data;
//   };

//   DataStore.prototype.remove = function (key) {
//     delete this.data[key];
//   };

//   App.DataStore = DataStore;
//   window.App = App;
// })(window);
