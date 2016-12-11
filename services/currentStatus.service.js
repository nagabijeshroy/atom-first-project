var Q = require("q");
var currentStatus = require('../models/currentStatus');

var getCurrentStatusById = function(userId) {

    var deferred = Q.defer();
    currentStatus.findOne({
        userId: userId
    }, function(error, currentStatus) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(currentStatus);
        }
    });
    return deferred.promise;
}

var updateCurrentStatusData = function(currentStatusData) {
    var deferred = Q.defer();
    currentStatus.findOne({
        userId: currentStatusData.userId
    }, function(error, currentStatus) {
        if (error) {

        } else {
            currentStatus.jobName = currentStatusData.jobName;
            currentStatus.client = currentStatusData.client;
            currentStatus.employer = currentStatusData.employer;
            currentStatus.save(function(err, updatedCurrentStatus) {
                if (err) {
                    deferred.reject(new Error(error));
                } else {
                    deferred.resolve(updatedCurrentStatus);
                }
            });
        }
    });
    return deferred.promise;
}

var currentStatusService = {
    getCurrentStatusById: getCurrentStatusById,
    updateCurrentStatusData: updateCurrentStatusData
}

module.exports = currentStatusService
