var Q = require("q");
var achievements = require('../models/achievements');

var getAchievementsById = function(userId) {
    var deferred = Q.defer();
    achievements.findOne({
        userId: userId
    }, function(error, achievements) {
        if (error) {
            deferred.reject(new Error(error));
        } else {
            deferred.resolve(achievements);
        }
    });
    return deferred.promise;

    //Alternative way
    /*Q(achievements.findOne({userId: 755613})
        .exec())
        .then(function(achievements) {
            console.log(JSON.stringify(achievements));
            res.send(JSON.stringify(achievements))
        })
        .catch(function(err) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        }).done(function(){
          mongoose.disconnect();
        });*/
}

var updateAchievementsData = function(achievementsData) {
    var deferred = Q.defer();
    achievements.findOne({
        userId: achievementsData.userId
    }, function(error, achievements) {
        if (error) {

        } else {
            achievements.achievementsList = achievementsData.achievementsList;
            achievements.save(function(err, updatedAchievementsData) {
                if (err) {
                    deferred.reject(new Error(error));
                } else {
                    deferred.resolve(updatedAchievementsData);
                }
            });
        }
    });
    return deferred.promise;
}

var achievementsService = {
    getAchievementsById: getAchievementsById,
    updateAchievementsData: updateAchievementsData
}

module.exports = achievementsService
