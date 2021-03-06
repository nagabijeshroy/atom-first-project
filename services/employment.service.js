var Q = require("q");
var mongoose = require("mongoose");
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


var updateEmploymentData = function(userId, employmentListItem) {
    var deferred = Q.defer();
    employment.findOneAndUpdate({
            userId: userId,
            "employmentList._id": mongoose.Types.ObjectId(employmentListItem._id)
        }, {
            $set: {
                "employmentList.$.company": employmentListItem.company,
                "employmentList.$.job": employmentListItem.job,
                "employmentList.$.duration": employmentListItem.duration
            }
        },
        function(err, updatedEmploymentListItem) {
            if (err) {
                deferred.reject(new Error(err));
            } else if (updatedEmploymentListItem) {
                deferred.resolve(updatedEmploymentListItem);
            }
        }
    );
    return deferred.promise;
}

var addEmploymentData = function(userId, employmentListItem) {
    var deferred = Q.defer();
    employment.findOneAndUpdate({
            userId: userId
        }, {
            $push: {
                "employmentList": {
                    "company": employmentListItem.company,
                    "job": employmentListItem.job,
                    "duration": employmentListItem.duration,
                    "isCollapsed": employmentListItem.isCollapsed
                }
            }
        },
        function(err, updatedEmploymentListItem) {
            if (err) {
                console.log(err);
                deferred.reject(new Error(err));
            } else if (updatedEmploymentListItem) {
                deferred.resolve(updatedEmploymentListItem);
            }
        }
    );
    return deferred.promise;
}

var deleteEmploymentData = function(userId, employmentListItem) {
    var deferred = Q.defer();
    employment.findOneAndUpdate({
            userId: userId,
            "employmentList._id": mongoose.Types.ObjectId(employmentListItem._id)
        }, {
            $pull: {
                employmentList: {
                    _id: mongoose.Types.ObjectId(employmentListItem._id)
                }
            }
        }, {
            new: true
        },
        function(err, updatedEmploymentListItem) {
            if (err) {
                console.log(err);
                deferred.reject(new Error(err));
            } else if (updatedEmploymentListItem) {
                deferred.resolve(updatedEmploymentListItem);
            }
        }
    );
    return deferred.promise;
}



var employmentService = {
    getEmploymentById: getEmploymentById,
    addEmploymentData: addEmploymentData,
    updateEmploymentData: updateEmploymentData,
    deleteEmploymentData: deleteEmploymentData
}

module.exports = employmentService
