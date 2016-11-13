angular
.module('app.myPortfolio')
.service('ObjectiveService',ObjectiveService);

function ObjectiveService(){
  var service = this;
  var objectiveData = {
    fullName: 'NAGA BIJESH ROY RAYA',
    statement: 'Seeking full-time opportunities as a Java UI/Web Developer',
    quotes:[
      {
        description: 'Content precedes design. Design in the absence of content is not design, it\'s decoration.',
        author: 'Jeffrey Zeldman'
      },
      {
        description: 'Truly elegant design incorporates top-notch functionality into a simple, uncluttered form.',
        author: 'David Lewis'
      }
    ]
  }
  service.getObjectiveData = function(){
    return objectiveData;
  }

  return service;
}
