angular.module('app.dashboard')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/notifications', {
      templateUrl: 'dashboard/templates/notifications.html',
      controller: 'NotificationsCtrl'
    });
  }])

  .controller('NotificationsCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $rootScope.page = 'Notifications';


    $scope.emails = [
      {
        description: 'Receive monthly promotional emails',
        checked: false
      },

      {
        description: 'Receive emails from your favorite charities',
        checked: true
      },

      {
        description: 'Receive emails about new charities you may be interested in',
        checked: true
      }

    ];

    $scope.pushNotifications = [
      {
        description: 'Receive push notifications about new messages',
        checked: false
      },

      {
        description: 'Receive push notifications about new contact requests',
        checked: false
      },

      {
        description: 'Receive push notifications about new charities you may be interested in',
        checked: true
      }
    ];

  }]);
