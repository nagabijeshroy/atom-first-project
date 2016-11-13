angular
  .module('app.myPortfolio')
  .controller('SkillsController', SkillsController);
SkillsController.$inject = ['$scope', 'SkillsService'];
function SkillsController ($scope, SkillsService) {
  var vm = this;
  vm.status = {
      isCollapsed: false,
      isEmpty: false
  }
  vm.skillsData = SkillsService.getSkillsData();
  vm.status.isEmpty = $.isEmptyObject(vm.skillsData);
}
