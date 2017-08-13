'use strict';

// Declare app level module which depends on views, and components
angular.module('app', [
	'ngRoute',
	'ngAnimate',
	'ngMessages',
	'ui.bootstrap',
	'app.global',
	'app.dashboard'
	])
	.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({
			redirectTo: '/dashboard'
		});
	}]);
