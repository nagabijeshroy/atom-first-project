var express = require('express')
var router = express.Router()
var summaryService = require('../services/summary.service');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
        console.log('Time: ', Date.now())
        next()
    })
    // define the home page route
router.get('/:userId', function(req, res) {
    var userId = req.params.userId;
    summaryService.getSummaryById(userId)
        .then(function(summary) {
            console.log(JSON.stringify(summary));
            res.send(JSON.stringify(summary))
        })
        .catch(function(error) {
            console.log("There was an error");
            res.Status(500).send(JSON.stringify(err));
        });
})

module.exports = router;
