angular
  .module('app.myPortfolio')
  .controller('EducationController', EducationController);
EducationController.$inject = ['$scope', 'EducationService'];
function EducationController ($scope, EducationService) {
  var vm = this;
  vm.status = {
      isCollapsed: true,
  }
  vm.educationData = EducationService.getEducationData();
}
