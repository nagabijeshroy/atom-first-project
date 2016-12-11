var Q = require("q");
var skills = require('../models/skills');

var getSkillsById = function(userId) {
    var deferred = Q.defer();
    skills.findOne({
        userId: userId
    }, function(error, skills) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(skills);
        }
    });

    return deferred.promise;
}

var updateSkillsData = function(skillsData) {
    var deferred = Q.defer();
    skills.findOne({
        userId: skillsData.userId
    }, function(error, skills) {
        if (error) {

        } else {
            skills.skillsList = skillsData.skillsList;
            skills.tags = skillsData.tags;
            skills.save(function(err, updatedSkillsData) {
                if (err) {
                    deferred.reject(new Error(error));
                } else {
                    deferred.resolve(updatedSkillsData);
                }
            });
        }
    });
    return deferred.promise;
}


var skillsService = {
    getSkillsById: getSkillsById,
    updateSkillsData: updateSkillsData
}

module.exports = skillsService
