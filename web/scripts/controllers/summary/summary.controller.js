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
  SummaryService.getSummaryData()
  .then(
      function(data) {
          vm.summaryData = data;
          vm.status.isEmpty = $.isEmptyObject(vm.summaryData);
      },
      function(error) {
          console.log(error.statusText);
      }
  );
  vm.status.isEmpty = $.isEmptyObject(vm.summaryData);
}
