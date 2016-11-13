angular
    .module('app.myPortfolio')
    .directive('skills', skills);

function skills() {
    var directive = {
        link: link,
        templateUrl: 'scripts/directives/skills/skills.directive.html',
        restrict: 'EA',
        scope: {},
        controller: SkillsController,
        controllerAs: 'vm',
        bindToController: true
    };
    return directive;

    function link(scope, element, attrs) {

    }
}
