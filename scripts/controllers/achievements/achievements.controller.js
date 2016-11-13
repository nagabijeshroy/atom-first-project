angular
  .module('app.myPortfolio')
  .controller('AchievementsController', AchievementsController);
AchievementsController.$inject = ['$scope', 'AchievementsService'];
function AchievementsController ($scope, AchievementsService) {
  var vm = this;
  vm.status = {
      isCollapsed: false,
      isEmpty: false
  }
  vm.achievementsData = AchievementsService.getAchievementsData();
  vm.status.isEmpty = $.isEmptyObject(vm.achievementsData);
}
