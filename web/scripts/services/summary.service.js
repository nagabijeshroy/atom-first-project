angular
    .module('app.myPortfolio')
    .service('SummaryService', SummaryService);

SummaryService.$inject = ['$http', '$q'];

function SummaryService($http, $q) {

    var service = this;

    service.getSummaryData = function() {
        var deferred = $q.defer();
        return $http.get("/summary")
            .then(function(response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function(response) {
                deferred.reject(response);
                return deferred.promise;
            });
    }

}
