angular
  .module('app.myPortfolio')
  .controller('ObjectiveController', ObjectiveController);
ObjectiveController.$inject = ['$scope','ObjectiveService'];
function ObjectiveController ($scope, ObjectiveService) {
  var vm = this;
  vm.status = {
      isEmpty: false
  }
  ObjectiveService.getObjectiveData()
  .then(
      function(data) {
          vm.objectiveData = data;
          vm.status.isEmpty = $.isEmptyObject(vm.objectiveData);
      },
      function(error) {
          console.log(error.statusText);
      }
  );
  vm.status.isEmpty = $.isEmptyObject(vm.objectiveData);
}
