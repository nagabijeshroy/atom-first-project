angular
    .module('app.myPortfolio')
    .directive('education', education);

function education() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/education/education.directive.html',
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
