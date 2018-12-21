"use strict";
(function () {
  var ctx = document.canvas.getContext('2d');
  ctx.fillStyle = black;
  ctx.fillRect(10, 10, 500, 300);
  ctx.fillStyle = white;
  ctx.font = '16px AvenirNext';
  ctx.fillText('Привет', 40, 40);
})();

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
    }
    ;
    // /* -------------------------------------- */
    // var parentLink = document.querySelector('.navigation__item_parent');
    // if (parentLink != null) {
    //     parentLink.querySelector('.navigation__link').removeAttribute('href');
    //     parentLink.addEventListener('click', function () {
    //         this.classList.toggle('navigation__item_opened');
    //         parentLink.querySelector('.navigation__sublist').classList.toggle('navigation__sublist_opened');
    //     });
    //     document.onmouseup = function (e) {
    //         var $target = event.target;
    //         if ($target.matches('.navigation__item_parent') == false) {
    //             console.log($target);
    //             parentLink.classList.remove('navigation__item_opened');
    //             parentLink.querySelector('.navigation__sublist').classList.remove('navigation__sublist_opened');
    //         }
    //     };
    // }
    // ;
});
