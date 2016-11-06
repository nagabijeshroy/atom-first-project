angular
    .module('app.myPortfolio')
    .directive('employment', employment);

function employment() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/employment/employment.directive.html',
        restrict: 'EA',
        scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      scope.status = {
        open:false
      }
      scope.status1 ={
        open:false
      }
      scope.status2 ={
        open:false
      }
      scope.status3 ={
        open:false
      }
      scope.status4 ={
        open:false
      }
      scope.status5 ={
        open:false
      }
      scope.display = function(statusNum){
        if(!statusNum){
          statusNum = '';
        }
        if(!scope['status'+statusNum].open){
          scope['status'+statusNum].open = true;
        }else{
          scope['status'+statusNum].open = false;
        }
      }
    }
}
