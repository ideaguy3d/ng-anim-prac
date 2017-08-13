angular.module('app.dashboard')
  .controller('FollowingCtrl', ['$scope', function($scope) {
    $scope.following = [
      {
        firstName: 'Rachel',
        lastName: 'Young'
      },
      {
        firstName: 'William',
        lastName: 'Martin'
      },
      {
        firstName: 'Sean',
        lastName: 'Scott'
      },
      {
        firstName: 'Laura',
        lastName: 'Evans'
      },
      {
        firstName: 'Brian',
        lastName: 'Miller'
      },
      {
        firstName: 'Natalie',
        lastName: 'Turner'
      },
      {
        firstName: 'Tiffany',
        lastName: 'Garcia'
      },
      {
        firstName: 'Max',
        lastName: 'Levine'
      },
      {
        firstName: 'Stephanie',
        lastName: 'Roday'
      }
    ];
  }]);
