angular
    .module('app.myPortfolio')
    .config(config);

function config($routeProvider) {
    $routeProvider
        .when('/contact', {
            templateUrl: 'contact.html',
            controller: 'Contact',
            controllerAs: 'vm'
        });
}
