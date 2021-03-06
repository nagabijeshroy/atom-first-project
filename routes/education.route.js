var express = require('express')
var router = express.Router()
var educationService = require('../services/education.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        //console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    educationService.getEducationById(userId)
        .then(function(education) {
            res.send(JSON.stringify(education))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
});

router.put('/', function(req, res) {
    var educationListItem = req.body.educationListItem.educationList;
    var userId = req.body.userId;
    educationService.updateEducationData(userId, educationListItem)
        .then(function(educationListItem) {
            res.send(JSON.stringify(educationListItem))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.send(JSON.stringify(err));
        });
})

router.post('/', function(req, res) {
    var educationListItem = req.body.educationListItem.educationList;
    var userId = req.body.userId;
    educationService.addEducationData(userId, educationListItem)
        .then(function(educationListItem) {
            res.send(JSON.stringify(educationListItem))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

router.delete('/', function(req, res) {
    var educationListItem = req.body.educationListItem.educationList;
    var userId = req.body.userId;
    educationService.deleteEducationData(userId, educationListItem)
        .then(function(educationListItem) {
            res.send(JSON.stringify(educationListItem))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

module.exports = router;
