angular.module('app.global', [])
	.factory('TweenMax', ['$window', function ($window) {
			return $window.TweenMax;
		}
	]);