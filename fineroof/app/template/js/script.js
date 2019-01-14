"use strict";
// (function () {
//   var createCTX = function () {
//     var canvas = document.getElementById('canvas');
//     var sliderH = document.querySelector('.index-slider__item').offsetHeight;
//     var sliderW = document.querySelector('.index-slider__item').offsetWidth;
//     console.log(sliderH);
//     console.log(sliderW);
//     canvas.width = sliderW;
//     canvas.height = sliderH;
//     canvas.style.position = 'absolute';
//     canvas.style.zIndex = '2';
//     canvas.style.display = 'none';
//     var ctx = canvas.getContext('2d');
//
//     ctx.fillStyle = 'transparent';
//     ctx.fillRect(10, 10, 500, 300);
//     ctx.globalAlpha = 0.7;
//     ctx.fillStyle = 'rgb(255, 255, 255)';
//     ctx.font = '100px AvenirNext';
//     ctx.textBaseline = "hanging";
//     ctx.strokeText('Привет', 120, 120);
//   }
//   window.slider = {
//     canvas: createCTX,
//   }
// })();

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
});
