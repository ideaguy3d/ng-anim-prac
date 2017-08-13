angular.module('app.global')
	.animation('.animate-fade-in-out', ['TweenMax', function (TweenMax) {
		
		var duration = 1;
		
		return {
			enter: function (element, done) {
				TweenMax.from(element, duration, {
					opacity: 0,
					x: '-100%',
					ease: Back.easeOut,
					onComplete: done
				})
			},
			
			leave: function (element, done) {
				TweenMax.to(element, duration, {
					opacity: 0,
					x: '-100%',
					ease: Back.easeIn,
					onComplete: done
				});
				
				var width = element[0].offsetWidth;
				var delay = .3 * duration;
				
				TweenMax.to(element, duration - delay, {
					marginRight: -width,
					delay: delay,
					ease: Power4.easeIn,
					onComplete: done
				})
			}
		}
		
	}]);