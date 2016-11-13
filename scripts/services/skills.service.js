angular
    .module('app.myPortfolio')
    .service('SkillsService', SkillsService);

function SkillsService() {

    var service = this;

    var skillsData = {
        skillsList: [
            'Java expert',
            'AngularJS and JavaScript expert',
            'Interface design and implementation',
            'Proficient in HTML and CSS',
            'SASS',
            'SQL expert',
            'Agile development methodologies',
            'Requirements analysis and design phases',
            'Team player',
        ],
        tags: [
            {
                id: 6,
                word: "  JPA ",
                size: 6
            }, {
                id: 7,
                word: "  Android ",
                size: 4
            }, {
                id: 8,
                word: "  Oracle ",
                size: 6
            }, {
                id: 1,
                word: "  Java ",
                size: 10
            }, {
                id: 5,
                word: "  C, C++ ",
                size: 2
            }, {
                id: 9,
                word: "  SQL Server ",
                size: 6
            }, {
                id: 10,
                word: "  MySQL ",
                size: 6
            }, {
                id: 1,
                word: "  NOSQL ",
                size: 4
            }, {
                id: 8,
                word: "  JavaScript ",
                size: 9
            }, {
                id: 4,
                word: "  CSS3 ",
                size: 7
            }, {
                id: 3,
                word: "  HTML5 ",
                size: 7
            }, {
                id: 5,
                word: "  NodeJS ",
                size: 9
            }, {
                id: 6,
                word: "  JQuery ",
                size: 6
            }, {
                id: 7,
                word: "  Bootstrap ",
                size: 8
            }, {
                id: 2,
                word: "  AngularJS ",
                size: 10
            }, {
                id: 9,
                word: "  D3.js ",
                size: 4
            }, {
                id: 10,
                word: " AJAX  ",
                size: 6
            }, {
                id: 1,
                word: "  Jersey ",
                size: 1
            }, {
                id: 2,
                word: "  JAX-RS ",
                size: 6
            }, {
                id: 4,
                word: "  RESTful ",
                size: 8
            }, {
                id: 5,
                word: "  Hibernate ",
                size: 8
            }, {
                id: 3,
                word: "  Swagger UI ",
                size: 3
            }, {
                id: 4,
                word: "  GIT ",
                size: 6
            }, {
                id: 5,
                word: "  SVN ",
                size: 5
            }, {
                id: 3,
                word: "  Spring MVC ",
                size: 10
            }, {
                id: 6,
                word: "  IBM WebSphere ",
                size: 3
            }, {
                id: 2,
                word: "  SASS ",
                size: 9
            }, {
                id: 3,
                word: "  C# ",
                size: 5
            }, {
                id: 4,
                word: "  .NET ",
                size: 2
            }, {
                id: 2,
                word: "  SQLite ",
                size: 3
            }, {
                id: 7,
                word: "  RAD ",
                size: 4
            }, {
                id: 8,
                word: "  IntelliJ ",
                size: 5
            }, {
                id: 9,
                word: "  Eclipse ",
                size: 8
            }, {
                id: 10,
                word: "  Net Beans ",
                size: 6
            }, {
                id: 1,
                word: "  Microsoft Visio ",
                size: 1
            },
        ],
    }

    service.getSkillsData = function() {
        return skillsData;
    }

}
