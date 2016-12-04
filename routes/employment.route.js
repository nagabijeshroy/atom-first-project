var express = require('express')
var router = express.Router()
var employmentService = require('../services/employment.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    employmentService.getEmploymentById(userId)
        .then(function(employment) {
            console.log(JSON.stringify(employment));
            res.send(JSON.stringify(employment))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

module.exports = router;
