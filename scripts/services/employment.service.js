angular
    .module('app.myPortfolio')
    .service('EmploymentService', EmploymentService);

function EmploymentService() {

    var service = this;

    var employmentData = {
        employmentList: [{
            company: {
                name: 'Sogeti USA',
                city: 'Baltimore',
                state: 'MD'
            },
            job: {
                jobName: 'AngularJS & Java Web Developer',
                responsibilities: [
                    'Web application development using J2EE, REST, Spring MVC and WebSphere portal, UI development using Angular JS and JQuery',
                    'Creating secure, user friendly, fast web application with web analytics',
                    'Writing unit tests using JUnit',
                    'Created proof-of-concept prototype applications for demonstration and evaluation purposes',
                    'Support testing, including review of test cases and procedures, helping to plan and execute performance tests, evaluate results',
                    'Updated, modified and expanded existing software programs',
                    'Organized and held meetings with stakeholders, contractor product teams and customers',
                ]
            },
            duration: {
                from: {
                    month: 'Feb',
                    year: '16'
                },
                to: {
                    month: 'current',
                    year: ''
                }
            },
            isCollapsed: true,
        }, {
            company: {
                name: 'AmerisourceBergen Corp',
                city: 'Charlotte',
                state: 'NC'
            },
            job: {
                jobName: 'Software Developer Intern',
                responsibilities: [
                    'Worked on J2EE , Spring MVC and REST Web service',
                    'Developed a dynamic web interface using Angular JS and HTML',
                    'Worked on the development of new features and enhancements',
                    'Attending and coordinating the meetings with supervisor on the project vm.status and issues to be fixed.',
                    'Involved in with client interactions for UAT',
                ]
            },
            duration: {
                from: {
                    month: 'Jun',
                    year: '15'
                },
                to: {
                    month: 'Aug',
                    year: '15'
                }
            },
            isCollapsed: true,
        }, {
            company: {
                name: 'Triveni Indian Students Association',
                city: 'Charlotte',
                state: 'NC'
            },
            job: {
                jobName: 'Web Developer',
                responsibilities: [
                    'Designed and developed a cross browser compatible, user facing web application for Indian Students Association at University of North Carolina at Charlotte',
                    'Responsible for Requirements gathering, Design Analysis and leading the team',
                ]
            },
            duration: {
                from: {
                    month: 'Dec',
                    year: '14'
                },
                to: {
                    month: 'Dec',
                    year: '15'
                }
            },
            isCollapsed: true,
        }, {
            company: {
                name: 'Tata Consultancy Services',
                city: 'Hyderabad',
                state: 'India'
            },
            job: {
                jobName: 'Software Developer',
                responsibilities: [
                    'Worked on the development of REST Web Service and Spring framework in Java',
                    'Developed UI using Angular JS, HTML, Bootstrap CSS and JQuery',
                    'Incident analysis and defect fixing',
                    'Coordinated with QA testers for end-to-end unit testing and post-production testing',
                    'Team mentoring including peer reviewing of code and design',
                    'Production Incidents Analysis and resolution',
                ]
            },
            duration: {
                from: {
                    month: 'Nov',
                    year: '13'
                },
                to: {
                    month: 'Jul',
                    year: '14'
                }
            },
            isCollapsed: true,
        }, {
            company: {
                name: 'Sree Vidyanikethan Educational Institutions',
                city: 'Tirupati',
                state: 'India'
            },
            job: {
                jobName: 'Software Developer',
                responsibilities: [
                    'Responsible for Analysis, Design and Development',
                    'Handling Production issues and modifying the code according to the requirement',
                    'Designed Graphical User Interface for various web pages using Angular JS, HTML, Bootstrap CSS and JavaScript Designed and created the database for the tool',
                    'Wrote test cases and performed regression testing',
                    'Involved in Unit & Functional Testing',
                ]
            },
            duration: {
                from: {
                    month: 'Dec',
                    year: '12'
                },
                to: {
                    month: 'Aug',
                    year: '13'
                }
            },
            isCollapsed: true,
        }]
    }

    service.getEmploymentData = function() {
        return employmentData;
    }

}