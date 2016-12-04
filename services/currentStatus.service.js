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

var currentStatusService = {
    getCurrentStatusById: getCurrentStatusById
}

module.exports = currentStatusService
