angular
  .module('app.myPortfolio')
  .controller('ObjectiveController', ObjectiveController);
ObjectiveController.$inject = ['$scope','ObjectiveService'];
function ObjectiveController ($scope, ObjectiveService) {
  var vm = this;
  vm.status = {
      isEmpty: false
  }
  vm.objectiveData = ObjectiveService.getObjectiveData();
  vm.status.isEmpty = $.isEmptyObject(vm.objectiveData);
}
