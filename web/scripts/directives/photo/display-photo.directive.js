angular
    .module('app.myPortfolio')
    .directive('displayPhoto', displayPhoto);

function displayPhoto() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/photo/display-photo.directive.html',
        restrict: 'EA'
    };
    return directive;

    function link(scope, element, attrs) {
        /* */
    }
}
