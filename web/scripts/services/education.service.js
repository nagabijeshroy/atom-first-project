angular
    .module('app.myPortfolio')
    .service('EducationService', EducationService);

EducationService.$inject = ['$http', '$q']
function EducationService($http, $q) {

    var service = this;

    service.getEducationData = function() {
      var deferred = $q.defer();
      return $http.get("/education")
        .then(function(response) {
            deferred.resolve(response.data);
            return deferred.promise;
        }, function(response) {
            deferred.reject(response);
            return deferred.promise;
        });
    }

}
