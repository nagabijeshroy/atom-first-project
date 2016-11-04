angular
    .module('app.myPortfolio')
    .directive('objective', objective);

function objective() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/objective/objective.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
}
