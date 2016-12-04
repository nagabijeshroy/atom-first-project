var Q = require("q");
var summary = require('../models/summary');

var getSummaryById = function(userId) {
    var deferred = Q.defer();
    summary.findOne({
        userId: userId
    }, function(error, summary) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(summary);
        }
    });

    return deferred.promise;
}

var summaryService = {
    getSummaryById: getSummaryById
}

module.exports = summaryService
