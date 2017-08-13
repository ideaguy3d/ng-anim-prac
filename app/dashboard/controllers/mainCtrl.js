angular.module('app.dashboard')

  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.toggle = true;
    $scope.toggleSidebar = function() {
      $scope.toggle = !$scope.toggle;
    };
  }]);
