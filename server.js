var express = require('express');
var app = express();
var mongoose = require('./connection');
var achievements = require('./routes/achievements.route');
var currentStatus = require('./routes/currentStatus.route');
var education = require('./routes/education.route');
var employment = require('./routes/employment.route');
var objective = require('./routes/objective.route');
var skills = require('./routes/skills.route');
var summary = require('./routes/summary.route');

app.use('/achievements', achievements);
app.use('/currentStatus', currentStatus);
app.use('/education', education);
app.use('/employment', employment);
app.use('/objective', objective);
app.use('/skills', skills);
app.use('/summary', summary);

app.use(express.static(__dirname + "/web"))

app.listen(3000);
console.log("listening from port 3000");
