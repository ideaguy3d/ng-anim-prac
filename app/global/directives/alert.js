(function() {
  'use strict';

  var directive = ['$animate', function ($animate) {

    var def = {
      restrict: 'EA',
      templateUrl: 'global/templates/alert.html',
      transclude: true,
      replace: true,
      scope: {
        type: '@',
        close: '&'
      },
      link: link
    };

    function link($scope, $element, $attrs) {
      $scope.dismiss = function() {
        var height = $element[0].offsetHeight;
        var promise = $animate.leave($element, {
          to: {
            'margin-bottom': -height + 'px'
          }
        });

        promise.then(function() {
          $scope.$apply(function() {
            $scope.close();
          });
        });
      };
    }

    return def;

  }];

  angular.module('app.global')
    .directive('wmcAlert', directive);

})();