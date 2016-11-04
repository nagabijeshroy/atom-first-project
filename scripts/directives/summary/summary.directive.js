angular
    .module('app.myPortfolio')
    .directive('summary', summary);

function summary() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/summary/summary.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
}
