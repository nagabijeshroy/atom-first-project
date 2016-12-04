var Q = require("q");
var education = require('../models/education');

var getEducationById = function(userId) {

    var deferred = Q.defer();
    education.findOne({
        userId: userId
    }, function(error, education) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(education);
        }
    });

    return deferred.promise;
}

var educationService = {
    getEducationById: getEducationById
}

module.exports = educationService
