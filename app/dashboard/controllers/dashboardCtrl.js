angular.module('app.dashboard')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/dashboard', {
      templateUrl: 'dashboard/templates/dashboard.html',
      controller: 'DashboardCtrl'
    });
  }])

  .controller('DashboardCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.page = 'Dashboard';

    $scope.firstVisit = true;
  }]);
