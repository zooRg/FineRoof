"use strict";
(function () {
 var checkVisibility = function (target) {
 	var targetPosition = {
 			top: window.pageYOffset + target.getBoundingClientRect().top,
 			left: window.pageXOffset + target.getBoundingClientRect().left,
 			right: window.pageXOffset + target.getBoundingClientRect().right,
 			bottom: window.pageYOffset + target.getBoundingClientRect().bottom
 		},
 		windowPosition = {
 			top: window.pageYOffset,
 			left: window.pageXOffset,
 			right: window.pageXOffset + document.documentElement.clientWidth,
 			bottom: window.pageYOffset + document.documentElement.clientHeight
 		};

		if (targetPosition.bottom > windowPosition.top &&
			targetPosition.top < windowPosition.bottom &&
			targetPosition.right > windowPosition.left &&
			targetPosition.left < windowPosition.right) {

			return false;
		} else {
			return true;
		};
	};
	var lastActionTimer;
	var debounce = function (callback, debounceInterval) {
			if (lastActionTimer) {
				clearTimeout(lastActionTimer);
			}

			lastActionTimer = setTimeout(callback, debounceInterval);
	}

	window.utils = {
		visibility: checkVisibility,
		debounce: debounce,
	}
})();
