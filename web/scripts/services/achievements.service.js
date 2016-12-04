angular
    .module('app.myPortfolio')
    .service('AchievementsService', AchievementsService);

AchievementsService.$inject = ['$http', '$q'];

function AchievementsService($http, $q) {

    var service = this;

    service.getAchievementsData = function() {
        var deferred = $q.defer();
        return $http.get("/achievements/755613")
            .then(function(response) {
                deferred.resolve(response.data);
                return deferred.promise;
            }, function(response) {
                deferred.reject(response);
                return deferred.promise;
            });
    }

}
