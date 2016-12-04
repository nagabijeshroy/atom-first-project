angular
    .module('app.myPortfolio')
    .service('CurrentStatusService', CurrentStatusService);
CurrentStatusService.$inject = ['$http', '$q'];

function CurrentStatusService($http, $q) {

    var service = this;

    service.getCurrentstatusData = function() {
        var deferred = $q.defer();
        return $http.get("/currentStatus/755613")
          .then(function(response) {
              deferred.resolve(response.data);
              return deferred.promise;
          }, function(response) {
              deferred.reject(response);
              return deferred.promise;
          });
    }

}
