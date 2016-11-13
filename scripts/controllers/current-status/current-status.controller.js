angular
  .module('app.myPortfolio')
  .controller('CurrentStatusController', CurrentStatusController);
CurrentStatusController.$inject = ['$scope','CurrentStatusService'];
function CurrentStatusController ($scope, CurrentStatusService) {
  var vm = this;
  vm.status = {
      isEmpty: false
  }
  vm.currentStatusData = CurrentStatusService.getCurrentstatusData();
  vm.status.isEmpty = $.isEmptyObject(vm.currentStatusData);
}
