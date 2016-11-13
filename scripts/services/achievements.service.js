angular
    .module('app.myPortfolio')
    .service('AchievementsService', AchievementsService);

function AchievementsService() {

    var service = this;

    var achievementsData = {
        achievementsList:[
          'Solved the problem to export reports generated from MicroStrategy server, embedded in the portal by creating a customized API and hence projected a lot in terms of cost savings to the client',
          'Was awarded 5 times as best performer for my contribution towards the successful delivery of the project'
        ],
    }

    service.getAchievementsData = function() {
        return achievementsData;
    }

}
