angular
  .module('app.myPortfolio')
  .controller('CurrentStatusController', CurrentStatusController);
CurrentStatusController.$inject = ['$scope','CurrentStatusService'];
function CurrentStatusController ($scope, CurrentStatusService) {
  var vm = this;
  vm.status = {
      isEmpty: false
  }
  CurrentStatusService.getCurrentstatusData()
  .then(
      function(data) {
          vm.currentStatusData =  data;
          vm.status.isEmpty = $.isEmptyObject(vm.currentStatusData);
      },
      function(error) {
          console.log(error.statusText);
      }
  );
  vm.status.isEmpty = $.isEmptyObject(vm.currentStatusData);
}
