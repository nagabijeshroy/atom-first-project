var express = require('express')
var router = express.Router()
var achievementsService = require('../services/achievements.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        //console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;

    achievementsService.getAchievementsById(userId)
        .then(function(achievements) {
            res.send(JSON.stringify(achievements))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });



    /*var achievements = new AchievementsModel();
    achievements.userId = 755613;
    achievements.achievementsList = [
        'Solved the problem to export reports generated from MicroStrategy server, embedded in the portal by creating a customized API and hence projected a lot in terms of cost savings to the client',
        'Was awarded 5 times as best performer for my contribution towards the successful delivery of the project'
    ];
    achievements.saveAsync()
        .spread(function(savedAchievements) {
            console.log(JSON.stringify(savedAchievements));
            res.send(JSON.stringify(savedAchievements))
        })
        .catch(function(err) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });*/
})

router.put('/', function(req, res) {
    var achievementsData = req.body.achievementsData;
    achievementsService.updateAchievementsData(achievementsData)
        .then(function(achievements) {
            res.send(JSON.stringify(achievements))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})


module.exports = router;
