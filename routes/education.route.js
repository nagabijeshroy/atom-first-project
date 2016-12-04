var express = require('express')
var router = express.Router()
var educationService = require('../services/education.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    educationService.getEducationById(userId)
        .then(function(education) {
            console.log(JSON.stringify(education));
            res.send(JSON.stringify(education))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

module.exports = router;
