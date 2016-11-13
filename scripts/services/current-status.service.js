angular
    .module('app.myPortfolio')
    .service('CurrentStatusService', CurrentStatusService);

function CurrentStatusService() {

    var service = this;

    var currentStatusData = {
        jobName: 'AngularJS & Java Web Developer',
        client: {
            name: 'T. Rowe Price',
            city: 'Owings Mills',
            state: 'MD'
        },
        employer: {
            name: 'SOGETI USA LLC',
            city: 'Baltimore',
            state: 'MD'
        }
    }

    service.getCurrentstatusData = function() {
        return currentStatusData;
    }

}
