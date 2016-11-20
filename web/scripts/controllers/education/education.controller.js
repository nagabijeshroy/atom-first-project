angular
  .module('app.myPortfolio')
  .controller('EducationController', EducationController);
EducationController.$inject = ['$scope', 'EducationService'];
function EducationController ($scope, EducationService) {
  var vm = this;
  vm.status = {
      isCollapsed: false,
  }
  EducationService.getEducationData()
  .then(
      function(data) {
          vm.educationData = data;
      },
      function(error) {
          console.log(error.statusText);
      }
  );
}
