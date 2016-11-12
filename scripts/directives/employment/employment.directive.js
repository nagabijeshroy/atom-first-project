angular
    .module('app.myPortfolio')
    .directive('employment', employment);

function employment() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/employment/employment.directive.html',
        restrict: 'EA',
        scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      scope.status = {
        isCollapsed:true
      }
      scope.status1 ={
      isCollapsed:true
      }
      scope.status2 ={
        isCollapsed:true
      }
      scope.status3 ={
        isCollapsed:true
      }
      scope.status4 ={
        isCollapsed:true
      }
      scope.status5 ={
        isCollapsed:true
      }

    }
}
