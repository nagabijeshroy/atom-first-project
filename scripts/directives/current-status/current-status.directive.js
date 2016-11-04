angular
    .module('app.myPortfolio')
    .directive('currentStatus', currentStatus);

function currentStatus() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/current-status/current-status.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
}
