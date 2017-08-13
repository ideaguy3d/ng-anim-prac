module.exports = function (config) {
	config.set({
		basePath: './app/',
		
		preprocessors: {
			'**/templates/*.html': ['ng-html2js']
		},
		
		ngHtml2JsPreprocessor: {
			moduleName: 'templates'
		},
		
		files: [
			'../test/helpers.js',
			'bower_components/jquery/dist/jquery.min.js',
			'bower_components/gsap/src/minified/TweenMax.min.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-messages/angular-messages.min.js',
			'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
			'bower_components/angular-route/angular-route.js',
			'bower_components/angular-animate/angular-animate.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'**/templates/*.html',
			'app.js',
			'global/global.js',
			'global/**/*.js',
			'dashboard/dashboard.js',
			'dashboard/*.js'
		],
		
		autoWatch: true,
		
		frameworks: ['jasmine'],
		
		browsers: ['Chrome'],
		
		plugins: [
			'karma-ng-html2js-preprocessor',
			'karma-jasmine',
			'karma-junit-reporter'
		],
		
		junitReporter: {
			outputFile: 'test_out/unit.xml',
			suite: 'unit'
		}
		
	});
};
