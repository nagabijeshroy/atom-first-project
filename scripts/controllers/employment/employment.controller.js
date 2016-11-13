angular
  .module('app.myPortfolio')
  .controller('EmploymentController', EmploymentController);
EmploymentController.$inject = ['$scope','EmploymentService'];
function EmploymentController ($scope, EmploymentService) {
  var vm = this;
  vm.status = {
      isCollapsed: false
  }
  vm.employmentData = EmploymentService.getEmploymentData();
}
