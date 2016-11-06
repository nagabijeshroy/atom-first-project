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
      scope.status ={
        open:false
      }
    }
}
