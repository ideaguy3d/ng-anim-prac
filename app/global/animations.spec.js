/**
 * Created by Julius Alvarado on 8/12/2017.
 */

describe('the custom animations.js file', function () {
	var $rootScope;
	var $rootElement;
	var $animate;
	var $document;
	var $timeout;
	var TweenMax;
	var body;
	var parent;
	var element;
	
	beforeEach(module('app'));
	beforeEach(module('app.global'));
	beforeEach(module('ngAnimateMock'));
	
	beforeEach(inject(function (_$rootScope_, _$rootElement_, _$animate_, _$document_, _$timeout_, _TweenMax_) {
		$rootScope = _$rootScope_;
		$rootElement = _$rootElement_;
		$animate = _$animate_;
		$document = _$document_;
		$timeout = _$timeout_;
		TweenMax = _TweenMax_;
		
		body = angular.element($document[0].body);
		parent = angular.element("<div></div>");
		
		// make sure ngAnimate goes to animation code
		parent.data('$$ngAnimateChildren', true);
		
		// $rootElement must be a parent of the animated element.
		$rootElement.append(parent);
		
		// $rootElement must be a child of body element
		body.append($rootElement);
		element = angular.element('<span class="animate-fade-in-out"></span>')
	}));
	
	describe('.animate-fade-in-out', function(){
		it('should run the custom animation when the element has a class of .animate-fade-in-out',
			function(){
				spyOn(TweenMax, 'from');
				
				$animate.enter(element, parent);
				
				$rootScope.$digest();
				$animate.triggerReflow();
				$timeout.flush(500);
				
				expect(TweenMax.from).toHaveBeenCalled();
			}
		);
		
		it('should pass a done callback to TweenMax', function(){
		    spyOn(TweenMax, 'from');
		    
		    $animate.enter(element, parent);
		    
		    $rootScope.$digest();
		    $animate.triggerReflow();
		    $timeout.flush(500);
		    
		    expect(TweenMax.from).toHaveBeenCalled();
		    
		    var args = TweenMax.from.mostRecentCall.args;
		    var options = args[2];
		    
		    expect(options.onComplete).toBeDefined();
		    expect(typeof options.onComplete).toBe('function');
		})
	});
});