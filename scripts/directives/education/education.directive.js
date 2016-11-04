angular
    .module('app.myPortfolio')
    .directive('education', education);

function education() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/education/education.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
}
