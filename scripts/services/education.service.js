angular
    .module('app.myPortfolio')
    .service('EducationService', EducationService);

function EducationService() {

    var service = this;

    var educationData = {
        educationList: [{
            institution: {
                name: 'University of North Carolina at Charlotte',
                city: 'Charlotte',
                state: 'NC'
            },
            course: {
                degreeName: 'Master of Science in Computer Science',
                gpa: '3.7/4',
                courseList: [
                    'Big Data Analytics for Competitive Advantage',
                    'Algorithms & Data Structures',
                    'Visual Analytics',
                    'Mobile Application Development',
                    'Data Warehousing',
                    'Database Systems',
                    'Software Systems Design and Implementation',
                    'Network Based Application Development',
                    'Computer Communications and Networks',
                    'Survey of Programming Languages'
                ]
            },
            duration: {
                from: {
                    month: 'Aug',
                    year: '14'
                },
                to: {
                    month: 'Dec',
                    year: '15'
                }
            },
            isCollapsed: true,
        }]
    }

    service.getEducationData = function() {
        return educationData;
    }

}
