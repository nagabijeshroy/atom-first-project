angular
    .module('app.myPortfolio')
    .controller('AchievementsController', AchievementsController);
AchievementsController.$inject = ['$scope', 'AchievementsService'];

function AchievementsController($scope, AchievementsService) {
    var vm = this;
    vm.status = {
        isCollapsed: false,
        isEmpty: false
    }
    AchievementsService.getAchievementsData()
    .then(
        function(data) {
            vm.achievementsData =  data;
            vm.status.isEmpty = $.isEmptyObject(vm.achievementsData);
        },
        function(error) {
            console.log(error.statusText);
        }
    );
    vm.status.isEmpty = $.isEmptyObject(vm.achievementsData);
}
