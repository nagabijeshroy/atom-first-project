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

var updateSummaryData = function(summaryData) {
    var deferred = Q.defer();
    summary.findOne({
        userId: summaryData.userId
    }, function(error, summary) {
        if (error) {

        } else {
            summary.descriptionList = summaryData.descriptionList;
            summary.save(function(err, updatedSummaryData) {
                if (err) {
                    deferred.reject(new Error(error));
                } else {
                    deferred.resolve(updatedSummaryData);
                }
            });
        }
    });
    return deferred.promise;
}


var summaryService = {
    getSummaryById: getSummaryById,
    updateSummaryData: updateSummaryData
}

module.exports = summaryService
