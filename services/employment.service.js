var Q = require("q");
var employment = require('../models/employment');

var getEmploymentById = function(userId) {

    var deferred = Q.defer();
    employment.findOne({
        userId: userId
    }, function(error, employment) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(employment);
        }
    });

    return deferred.promise;
}

var employmentService = {
    getEmploymentById: getEmploymentById
}

module.exports = employmentService
