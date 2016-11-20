angular
  .module('app.myPortfolio')
  .controller('EmploymentController', EmploymentController);
EmploymentController.$inject = ['$scope','EmploymentService'];
function EmploymentController ($scope, EmploymentService) {
  var vm = this;
  vm.status = {
      isCollapsed: false
  }
  EmploymentService.getEmploymentData()
  .then(
      function(data) {
          vm.employmentData = data;
      },
      function(error) {
          console.log(error.statusText);
      }
  );;
}
