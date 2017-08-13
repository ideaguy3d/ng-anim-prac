angular.module('app.dashboard')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/preferences', {
      templateUrl: 'dashboard/templates/preferences.html',
      controller: 'PreferencesCtrl'
    });
  }])

  .controller('PreferencesCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.page = 'Preferences';

    $scope.user = {
      name: 'Kevin Weeks',
      email: 'kevinweeks@pluralsight.com',
      city: 'San Luis Obispo',
      password: 'notsecure'
    };

    var copy = angular.copy($scope.user);

    $scope.submit = function() {
      $scope.submitted = true;
    };

    $scope.cancel = function() {
      $scope.user = angular.copy(copy);
      $scope.preferencesForm.$setPristine();
    };

  }]);
