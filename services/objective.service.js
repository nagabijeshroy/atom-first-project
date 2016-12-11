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

var updateObjectiveData = function(objectiveData) {
    var deferred = Q.defer();
    objective.findOne({
        userId: objectiveData.userId
    }, function(error, objective) {
        if (error) {

        } else {
            objective.fullName = objectiveData.fullName;
            objective.statement = objectiveData.statement;
            objective.quotes = objectiveData.quotes;
            objective.save(function(err, updatedObjectiveData) {
                if (err) {
                    deferred.reject(new Error(error));
                } else {
                    deferred.resolve(updatedObjectiveData);
                }
            });
        }
    });
    return deferred.promise;
}

var objectiveService = {
    getObjectiveById: getObjectiveById,
    updateObjectiveData: updateObjectiveData
}

module.exports = objectiveService
