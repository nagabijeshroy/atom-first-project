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

var skillsService = {
    getSkillsById: getSkillsById
}

module.exports = skillsService
