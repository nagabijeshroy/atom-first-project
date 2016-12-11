var express = require('express');
var router = express.Router();
var objectiveService = require('../services/objective.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        //console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    objectiveService.getObjectiveById(userId)
        .then(function(objective) {
            res.send(JSON.stringify(objective))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
});

router.put('/', function(req, res) {
    var objectiveData = req.body.objectiveData;
    objectiveService.updateObjectiveData(objectiveData)
        .then(function(objective) {
            res.send(JSON.stringify(objective))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

module.exports = router;
