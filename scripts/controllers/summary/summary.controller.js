angular
  .module('app.myPortfolio')
  .controller('SummaryController', SummaryController);
SummaryController.$inject = ['$scope','SummaryService'];
function SummaryController ($scope, SummaryService) {
  var vm = this;
  vm.status = {
      isCollapsed: false,
      isEmpty: false
  }
  vm.summaryData = SummaryService.getSummaryData();
  vm.status.isEmpty = $.isEmptyObject(vm.summaryData);
}
