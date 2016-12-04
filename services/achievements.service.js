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

var achievementsService = {
    getAchievementsById: getAchievementsById
}

module.exports = achievementsService
