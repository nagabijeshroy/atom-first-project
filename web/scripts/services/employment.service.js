angular
    .module('app.myPortfolio')
    .service('EmploymentService', EmploymentService);
EmploymentService.$inject = ['$http', '$q']

function EmploymentService($http, $q) {

    var service = this;

    service.getEmploymentData = function() {
        var deferred = $q.defer();
        return $http.get("/employment")
            .then(function(response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function(response) {
                deferred.reject(response);
                return deferred.promise;
            });
    }

}
