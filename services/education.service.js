var Q = require("q");
var mongoose = require("mongoose");
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


var updateEducationData = function(userId, educationListItem) {
    var deferred = Q.defer();
    education.findOneAndUpdate({
            userId: userId,
            "educationList._id": mongoose.Types.ObjectId(educationListItem._id)
        }, {
            $set: {
                "educationList.$.institution": educationListItem.institution,
                "educationList.$.course": educationListItem.course,
                "educationList.$.duration": educationListItem.duration
            }
        },
        function(err, updatedEducationListItem) {
            if (err) {
                deferred.reject(new Error(err));
            } else if (updatedEducationListItem) {
                deferred.resolve(updatedEducationListItem);
            }
        }
    );
    return deferred.promise;
}

var addEducationData = function(userId, educationListItem) {
    var deferred = Q.defer();
    education.findOneAndUpdate({
            userId: userId
        }, {
            $push: {
                "educationList": {
                    "institution": educationListItem.institution,
                    "course": educationListItem.course,
                    "duration": educationListItem.duration,
                    "isCollapsed": educationListItem.isCollapsed
                }
            }
        },
        function(err, updatedEducationListItem) {
            if (err) {
                console.log(err);
                deferred.reject(new Error(err));
            } else if (updatedEducationListItem) {
                deferred.resolve(updatedEducationListItem);
            }
        }
    );
    return deferred.promise;
}

var deleteEducationData = function(userId, educationListItem) {
    var deferred = Q.defer();
    education.findOneAndUpdate({
            userId: userId,
            "educationList._id": mongoose.Types.ObjectId(educationListItem._id)
        }, {
            $pull: {
                educationList: {
                    _id: mongoose.Types.ObjectId(educationListItem._id)
                }
            }
        }, {
            new: true
        },
        function(err, updatedEducationListItem) {
            if (err) {
                console.log(err);
                deferred.reject(new Error(err));
            } else if (updatedEducationListItem) {
                deferred.resolve(updatedEducationListItem);
            }
        }
    );
    return deferred.promise;
}

var educationService = {
    getEducationById: getEducationById,
    updateEducationData: updateEducationData,
    addEducationData: addEducationData,
    deleteEducationData: deleteEducationData
}

module.exports = educationService
