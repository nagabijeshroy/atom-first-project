angular
    .module('app.myPortfolio')
    .directive('achievements', achievements);

function achievements() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/achievements/achievements.directive.html',
        restrict: 'EA',
        scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      scope.status ={
        open:true
      }
    }
}
