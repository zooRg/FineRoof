"use strict";

(function () {
	var handleTogglePopup = function (evt) {
		var dataPopup = this.getAttribute('data-target');
		document.querySelector('' + dataPopup + '').classList.toggle('isShowed');
		document.body.classList.toggle('overflow');
	}
	var handleClosePopup = function () {
		var activePopup = document.querySelector('.popup.isShowed');
		if (activePopup !== null) {
			activePopup.classList.remove('isShowed');
			document.body.classList.toggle('overflow');
		}
	}
	var handleOverlayClose = function (evt) {
		var currentOverLay = document.querySelector('.popup__overlay');
		var target = evt.target;
		if (target !== document.querySelector('.popup__body') && target === document.querySelector('.popup__overlay')) {
			handleClosePopup();
		}
	}
	var removeLogoitem = function () {
		var headerLogo = document.querySelector('.header__logo');
		headerLogo.classList.toggle('isWatching');
	}
	var fixedMenu = function (object) {
		let wHeight = window.innerHeight;
		let headerBlock = document.querySelector('.header__top');
		let fixedHeader = document.querySelector('.fixed-menu');
		let windowScroll = window.pageYOffset;

		function getCoords() {
			return {
				itemTop: headerBlock.getBoundingClientRect().top + pageYOffset,
			};
		}
		if (window.utils.visibility(headerBlock) === true) {
			fixedHeader.classList.add('isFixed');
		} else {
			fixedHeader.classList.remove('isFixed');
		}
	}
	// var TIMEOUT = 5000;
	// var SERVER_STATUS_OK = 200;
	// var exchangeType =
	// var createXhr = function (responseType, timeout) {
	// 	var xhr = new XMLHttpRequest();
	// 	xhr.responseType = responseType;
	// 	xhr.timeout = timeout;
	//
	// 	return xhr;
	// };
	// var onProcessXhr = function (onSuccess, onError) {
	// 	var xhr = createXhr('xml', TIMEOUT);
	//
	// 	xhr.addEventListener('load', function () {
	// 		if (xhr.status === SERVER_STATUS_OK) {
	//
	// 		} else {
	//
	// 		}
	// 	});
	//
	// 	xhr.addEventListener('timeout', function () {
	// 		onError(ERRORS.timeoutError(xhr.timeout));
	// 	});
	//
	// 	return xhr;
	// };
	// var exchangeData = function (type, url, data) {
	// 	var response = onProcessXhr;
	// 	response.open(type, url);
	//
	// 	if (data !== null) {
	// 		response.send(data);
	// 	} else {
	// 		response.send();
	// 	}
	// };
	//
	// var getPinsData = function (callback) {
	// 	window.script.exchange(exchangeType, DOWNLOAD_URL, onLoadData, onLoadDataError);
	// 	callback.call();
	// };


	window.script = {
		closePopup: handleClosePopup,
		removePseudo: removeLogoitem,
		// exchange: exchangeData,
	}

	document.addEventListener('DOMContentLoaded', function () {
	    var headerToggle = document.querySelectorAll('.header__mobile');
	    var headerNav = document.querySelector('.navigation');
	    var overlay = document.querySelector('.overlay');
	    if (headerToggle != null && headerNav != null) {
			headerToggle.forEach(function (burger) {
				burger.addEventListener('click', function() {
					headerToggle.forEach(function (item) {
						item.classList.toggle('header__mobile_opened');
					})
					headerNav.classList.toggle('isActive');
					document.body.classList.toggle('overflow');
					overlay.classList.toggle('isActive');
				});
			})
	    };


		document.querySelectorAll('.jsOpenPopup').forEach(function (popup) {
			if (popup !== null) popup.addEventListener('click', handleTogglePopup);
		})
		document.querySelectorAll('.jsClosePopup').forEach(function (cross) {
			if (cross !== null) cross.addEventListener('click', handleClosePopup);
		})
		document.querySelectorAll('.popup__overlay').forEach(function (overlay) {
			if (overlay !== null) overlay.addEventListener('click', handleOverlayClose);
		})
		window.addEventListener('scroll', function () {
			window.utils.debounce(fixedMenu, 5);
		});

	    // window.slider.canvas();
	    var swiper = new Swiper ('.index-slider__container', {
	      slidesPerView: 1,
	      spaceBeetwen: 0,
	      autoplay: {
	        delay: 5000,
	      },
	      speed: 1000,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	        renderBullet: function (index, slider__bullet) {
	          return '<span class="' + slider__bullet + '"><span class="slider-bullet__pie slider-bullet__pie_spinner"></span><span class="slider-bullet slider-bullet__pie slider-bullet__pie_filler"></span><span class="slider-bullet slider-bullet__mask"></span></span>';
	        },
	      },
	      navigation: {
	       nextEl: '.slider-right_index',
	       prevEl: '.slider-left_index',
	      },
	    })
	    var swiper = new Swiper ('.catalog-slider__wrapper', {
	      slidesPerView: 2,
	      spaceBeetwen: 26,
	      autoplay: {
	        delay: 5000,
	      },
		  breakpoints: {
	      	1280: {
				slidesPerView: 1.2,
				loop: true,
				loopedSlides: 2,
			},
			  775: {
				slidesPerView: 1,
				spaceBetween: 0
			  },
	  	  },
	      speed: 1000,
	      pagination: {
	        el: '.swiper-pagination',
	        clickable: true,
	        renderBullet: function (index, slider__bullet) {
	          return '<span class="' + slider__bullet + '"><span class="slider-bullet__pie slider-bullet__pie_spinner"></span><span class="slider-bullet slider-bullet__pie slider-bullet__pie_filler"></span><span class="slider-bullet slider-bullet__mask"></span></span>';
	        },
	      },
	      navigation: {
	       nextEl: '.slider-right_catalog',
	       prevEl: '.slider-left_catalog',
	      },
	    })
	    var swiper = new Swiper ('.items-block__slider', {
	      slidesPerView: 3,
	      spaceBetween: 94,
	      navigation: {
	       nextEl: '.slider-right_similar',
	       prevEl: '.slider-left_similar',
	      },
			breakpoints: {
	      		1075: {
	      			slidesPerView: 2,
					spaceBeetwen: 40,
				},
				610: {
	      			slidesPerView: 1,
					spaceBeetwen: 0,
				}
			}
	    })
	});
})();
