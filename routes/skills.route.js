var express = require('express')
var router = express.Router()
var skillsService = require('../services/skills.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    skillsService.getSkillsById(userId)
        .then(function(skills) {
            console.log(JSON.stringify(skills));
            res.send(JSON.stringify(skills))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

module.exports = router;
