'use strict';

(function(){
	var objectsList = [
		{
			SVG: document.querySelector(".catalog__svg_worker"),
			defaultDur: 1000,
			property: -700,
		},
		{
			SVG: document.querySelector(".catalog__svg_hammer"),
			defaultDur: 660,
			property: 700,
		},
	];

	function handleMapElement () {
		var mapButton = document.querySelector('.header__button');
		var mapLane = document.getElementById("mainPin");

		if (mapLane !== null) {
			mapLane.addEventListener('load', function() {
				mapButton.onmouseover = mapButton.onmouseout = handler;
				var mapDocument = mapLane.contentDocument;
				var mapPath = mapDocument.querySelector('.hover-animation_background');

				function handler (event) {
					if (event.type == 'mouseover') {
						mapPath.style.x = "-35";
						mapPath.style.y = "40";
						window.script.removePseudo();
					}
					if (event.type == 'mouseout') {
						mapPath.style.x = "-5";
						mapPath.style.y = "-5";
						window.script.removePseudo();
					}
				};
			});
		}

	}
	var createNSupportDraw = function(currentSvg, dur) {
		if (currentSvg !== null) {
				var animateSvg = function () {

					window.addEventListener('scroll', function () {
						let wHeight = this.innerHeight;
						document.querySelectorAll('.catalog__svg').forEach(function (item) {
							let drow = anime({
									targets: currentSvg,
									translateX: 0,
									easing: 'easeInOutBack',
									delay: 50,
									duration: dur,

							});
							function getCoords() {
								return {
									itemTop: item.getBoundingClientRect().top + pageYOffset,
								};
							}

							let windowScroll = window.pageYOffset;
							window.utils.debounce(function () {
								if ((windowScroll + wHeight / 2 > getCoords().itemTop) && window.utils.visibility(item) === false) {
									drow
								} else {
									return
								}
							}, 400)
						})
					});

				}
				animateSvg();

		}
	}

	var animatedGalery = function() {
		var svgWrapper = document.querySelector('.gallery__wrap');
		if (svgWrapper !== null) {
			var SVG = document.querySelector('.galery-house');
		}
		if (SVG !== null) {
			SVG.addEventListener('load', function(){
				svgWrapper.onmouseover = svgWrapper.onmouseout = handler;
				var animationUp = SVG.contentDocument.querySelector('.lights-up');
				var recolorElems = SVG.contentDocument.querySelectorAll('.recolor-elems');
				function handler(event) {

					if (event.type == 'mouseover') {
						anime({
							targets: animationUp,
							translateY: -10
						});
						recolorElems.forEach(function (elem) {
							anime({
								targets: elem,
								fill: '#1bc09b',
								easing: 'easeInOutSine',
								duration: 500
							});
						})
					}
					if (event.type == 'mouseout') {
						anime({
							targets: animationUp,
							translateY: 0
						});
						recolorElems.forEach(function (elem) {
							anime({
								targets: elem,
								fill: '#DAE9E5',
								easing: 'easeInOutSine',
								duration: 500
							});
						})
					}
				};
			})
		}
	}
	var animatedLogo = function() {
		var svgWrapper = document.querySelector('.header__image');
		var SVG = svgWrapper.querySelector('object');
		if (SVG !== null) {
			SVG.addEventListener('load', function(){
				svgWrapper.onmouseover = svgWrapper.onmouseout = handler;
				var animationUp = SVG.contentDocument.querySelector('.hover-animation_logo');
				function handler(event) {

					if (event.type == 'mouseover') {
						anime({
							targets: animationUp,
							translateX: 20,
							easing: 'easeInOutBack',
							duration: 600

						});
					}
					if (event.type == 'mouseout') {
						anime({
							targets: animationUp,
							translateX: 0,
							easing: 'easeInOutBack',
							duration: 600
						});
					}
				};
			})
		}
	}
	var animatedYt = function() {
		var svgWrapper = document.querySelector('.jsChannel');
		var SVG = svgWrapper.querySelector('object');
		if (SVG !== null) {
			SVG.addEventListener('load', function(){
				svgWrapper.onmouseover = svgWrapper.onmouseout = handler;
				var animationUp = SVG.contentDocument.querySelector('.hover-animation_play');
				function handler(event) {

					if (event.type == 'mouseover') {
						anime({
							targets: animationUp,
							translateX: 11,
							translateY: 7,

							scale: 0.7,
							easing: 'easeInOutBack',
							duration: 600

						});
					}
					if (event.type == 'mouseout') {
						anime({
							targets: animationUp,
							translateX: 0,
							translateY: 0,
							scale: 1,
							easing: 'easeInOutBack',
							duration: 600
						});
					}
				};
			})
		}
	}

	document.addEventListener('DOMContentLoaded', function () {
		handleMapElement();
		animatedGalery();
		animatedLogo();
		animatedYt();

		if (document.body.classList.contains('animated')) {
			for (let i = 0; i < objectsList.length; i++) {
				createNSupportDraw(objectsList[i].SVG, objectsList[i].defaultDur)
			}

		} else {
			return
		}

	})

})();
