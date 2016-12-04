var Q = require("q");

var objective = require('../models/objective');

var getObjectiveById = function(userId) {

    var deferred = Q.defer();
    objective.findOne({
        userId: userId
    }, function(error, objective) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(objective);
        }
    });

    return deferred.promise;
}

var objectiveService = {
    getObjectiveById: getObjectiveById
}

module.exports = objectiveService
