angular
    .module('app.myPortfolio')
    .service('SkillsService', SkillsService);

SkillsService.$inject = ['$http', '$q'];

function SkillsService($http, $q) {

    var service = this;

    service.getSkillsData = function() {
        var deferred = $q.defer();
        return $http.get("/skills/755613")
            .then(function(response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function(response) {
                deferred.reject(response);
                return deferred.promise;
            });
    }

}
