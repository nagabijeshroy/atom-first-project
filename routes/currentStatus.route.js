var express = require('express')
var router = express.Router()
var currentStatusService = require('../services/currentStatus.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        //console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    currentStatusService.getCurrentStatusById(userId)
        .then(function(currentStatus) {
            res.send(JSON.stringify(currentStatus))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
});

router.put('/', function(req, res) {
    var currentStatusData = req.body.currentStatusData;
    currentStatusService.updateCurrentStatusData(currentStatusData)
        .then(function(currentStatus) {
            res.send(JSON.stringify(currentStatus))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})


module.exports = router;
