angular
    .module('app.myPortfolio')
    .directive('skills', skills);

function skills() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/skills/skills.directive.html',
        restrict: 'EA',
        scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      scope.status ={
        isCollapsed:false
      }
    }
}
