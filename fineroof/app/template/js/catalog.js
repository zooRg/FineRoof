"use strict";
(function () {
  var openBrandList = function (index, multiListRow) {
      var brandTabs = document.querySelectorAll(multiListRow);
      brandTabs.forEach(function (brand, i) {
          brand.classList.remove('isActive');
          if (i === index && brand.parentNode.classList.contains('isActive')) {
              brand.classList.add('isActive');
          }
          ;
      });
    };
  var multiTabsNavigation = function (multiTabsNode, multiListRow) {
      var tabsRow = document.querySelectorAll(multiTabsNode);
      tabsRow.forEach(function (child, index) {
          child.addEventListener('click', function (evt) {
              tabsRow.forEach(function (removeClassItem) {
                  removeClassItem.classList.remove('isActive');
              });
              var target = evt.target;
              if (child === target) {
                  child.classList.add('isActive');
                  openBrandList(index, multiListRow);
              }
          });
      });
  };
  var createLightBox = function (elementClass) {
    var checkElement = document.querySelector('.' + elementClass)
    if (checkElement !== null) {
      var lightboxDescription = GLightbox({
        selector: elementClass
      });
    }
  }
  document.addEventListener('DOMContentLoaded', function () {
    multiTabsNavigation('.jsTab', '.props-table__list');

    createLightBox('jsBoxSertificate');
	if (document.querySelector('.items-slider__wrap') !== null) {
		var swiper = new Swiper ('.items-slider__wrap', {
		  slidesPerView: 10,
		  spaceBetween: 84,
		  navigation: {
		   nextEl: '.slider-right_color',
		   prevEl: '.slider-left_color',
		  },
		})
	}

  })
})();
