var express = require('express');
var app = express();

var summary = require("./node_modules/summary_module");
var achievements = require("./node_modules/achievements_module");
var education = require("./node_modules/education_module");
var currentStatus = require("./node_modules/currentStatus_module");
var employment = require("./node_modules/employment_module");
var objective = require("./node_modules/objective_module");
var skills = require("./node_modules/skills_module");

app.use(express.static(__dirname + "/web"))
app.get("/objective", function(req, resp) {
    objective(req, resp);
});
app.get("/current-status", function(req, resp) {
    currentStatus(req, resp);
});
app.get("/education", function(req, resp) {
    education(req, resp);
});
app.get("/summary", function(req, resp) {
    summary(req, resp);
});
app.get("/achievements", function(req, resp) {
    achievements(req, resp);
});
app.get("/employment", function(req, resp) {
    employment(req, resp);
});
app.get("/skills", function(req, resp) {
    skills(req, resp);
});

app.listen(3000);
console.log("listening from port 3000");
