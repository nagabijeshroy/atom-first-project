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
  SkillsService.getSkillsData()
  .then(
      function(data) {
          vm.skillsData = data;
          vm.status.isEmpty = $.isEmptyObject(vm.skillsData);
      },
      function(error) {
          console.log(error.statusText);
      }
  );
  vm.status.isEmpty = $.isEmptyObject(vm.skillsData);
}
