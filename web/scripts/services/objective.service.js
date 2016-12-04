angular
.module('app.myPortfolio')
.service('ObjectiveService',ObjectiveService);

ObjectiveService.$inject = ['$http', '$q'];

function ObjectiveService($http, $q) {
  var service = this;
  service.getObjectiveData = function(){
    var deferred = $q.defer();
    return $http.get("/objective/755613")
        .then(function(response) {
            deferred.resolve(response.data);
            return deferred.promise;
        }, function(response) {
            deferred.reject(response);
            return deferred.promise;
        });
  }

  return service;
}
