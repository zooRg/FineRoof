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

	document.addEventListener('DOMContentLoaded', function () {
	    var headerToggle = document.querySelector('.header__mobile');
	    var headerNav = document.querySelector('.header__bottom');
	    var overlay = document.querySelector('.overlay');
	    if (headerToggle != null && headerNav != null) {
	        headerToggle.addEventListener('click', function () {
	            this.classList.toggle('header__mobile_opened');
	            headerNav.classList.toggle('isActive');
	            document.body.classList.toggle('overflow');
	            overlay.classList.toggle('isActive');
	        });
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
	      slidesPerView: 1.2,
	      spaceBeetwen: 26,
	      autoplay: {
	        delay: 5000,
	      },
		  breakpoints: {
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
	    })
	});
})();
