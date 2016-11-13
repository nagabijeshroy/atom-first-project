angular
    .module('app.myPortfolio')
    .service('SummaryService', SummaryService);

function SummaryService() {

    var service = this;

    var summaryData = {
      descriptionList:[
        'Software developer with two and half years of professional IT experience with Java/J2EE frameworks including Spring, Hibernate, RESTful Web Services with exceptional skills in Analysis, Design and Development of high scalable n-tiered Web Applications',
        'Experience in developing User Interfaces using AngularJS, AJAX, HTML5, Bootstrap, CSS3, JavaScript and JQuery',
        'Extensive work experience with Agile (Scrum) methodologies',
        'Good Experience in MVC framework to reduce the complexity and gain full control over the application',
        'Experience in working with IBM WebSphere, JBOSS and TOMCAT',
        'Experience in working with Oracle, MySQL and SQL Server',
        'Excellent hands on working with IBM RAD, Eclipse, and NetBeans IDE',
        'Good working experience on dependency injection framework',
        'Hands on experience writing JUnit tests Sound knowledge and understanding of object oriented design and programming',
        'Experience Good working experience of ORM framework',
        'Experience working with GIT, SVN',
        'Excellent Interpersonal and Communication skills coupled with strong technical and problem solving capabilities'
      ]
    }
    
    service.getSummaryData = function() {
        return summaryData;
    }

}
