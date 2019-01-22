"use strict";

(function(){
	var objectsList = [
		{
			svgName: document.getElementById("mainFlowerObject"),
			svgAnimation: '#animatedFlower',
			defaultDur: 25000,
		},
		{
			svgName: document.getElementById("mainHammer"),
			svgAnimation: '#animatedHammer',
			defaultDur: 15000,
		},
		{
			svgName: document.getElementById("mainWorker1"),
			svgAnimation: '#animatedWorker1',
			defaultDur: 65000,
		}
	];

	function handleMapElement () {
		var mapButton = document.querySelector('.header__button');
		var mapLane = document.getElementById("mainPin");

		mapLane.addEventListener('load', function() {
			mapButton.onmouseover = mapButton.onmouseout = handler;
			var mapDocument = mapLane.contentDocument;
			var mapPath = mapDocument.querySelector('.hover-animation_background');

			function handler (event) {
				if (event.type == 'mouseover') {
					mapPath.style.x = "-35";
					mapPath.style.y = "40";
				}
				if (event.type == 'mouseout') {
					mapPath.style.x = "-5";
					mapPath.style.y = "-5";
				}
			};
		});

	}
	var createNSupportDraw = function(currentSvg, animatedElement, dur) {
		currentSvg.addEventListener('load', function () {
			var svgDocument = currentSvg.contentDocument;
			var animateSvg = function () {

				var animationTarget = svgDocument.querySelector(animatedElement);
				var lineDrawing = anime({
					targets: animationTarget,
					strokeDashoffset: [anime.setDashoffset, 0],
					easing: 'linear',
					delay: 400,
					duration: dur
				});

				window.addEventListener('scroll', function () {
					let wHeight = this.innerHeight;
					document.querySelectorAll('.jsAnimate').forEach(function (item) {

						function getCoords() {
							return {
								itemTop: item.getBoundingClientRect().top + pageYOffset,
							};
						}
						let windowScroll = window.pageYOffset;

						if ((windowScroll + wHeight > getCoords().itemTop) && window.utils.visibility(item) === false && ((windowScroll + wHeight - getCoords().itemTop) <= 200)) {
							lineDrawing.restart();
						} else {
							return;
						}
					})
				});

			}
			animateSvg();
		});
	}

	var hoverDrowEffect = function (parent) {
		var childObj = parent.querySelector('.hoverDraw');
		childObj.addEventListener('load', function () {
			var getChildCont = childObj.contentDocument;
			var animationTarget = getChildCont.querySelector('.hoverDrawTarget');

			parent.onmouseover = parent.onmouseout = handler;

			var status = false;
			var animation = anime({
				targets: animationTarget,
				strokeDashoffset: [anime.setDashoffset, 0],
				easing: 'linear',
				delay: 0,
				duration: 10000,
				autoplay: false
			});
			function handler(event) {
				if (event.type == 'mouseover' && status === false) {
					status = true;
					animation.restart();
				}
				if (event.type == 'mouseout' && status === true) {
					animation.reverse();
					animation.finished.then(status = false);
				}
			};

		});

	}

	handleMapElement();

	if (document.body.classList.contains('animated')) {
		for (let i = 0; i < objectsList.length; i++) {
			createNSupportDraw(objectsList[i].svgName, objectsList[i].svgAnimation, objectsList[i].defaultDur)
		}
		document.querySelectorAll('.jsHoverEffect').forEach(function(item) {
			hoverDrowEffect(item);
		})
	} else {
		return
	}

})();
