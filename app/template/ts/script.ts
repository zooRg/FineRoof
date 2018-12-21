// document.addEventListener('DOMContentLoaded', function() {
//   const headerToggle = document.querySelector<HTMLButtonElement>('.header__mobile');
//   const headerNav = document.querySelector<HTMLElement>('.header__navigation');
//
//   if (headerToggle != null && headerNav != null) {
//       headerToggle.addEventListener('click', function(){
//           this.classList.toggle('header__mobile_opened');
//           headerNav.classList.toggle('header__navigation_opened');
//           document.body.classList.toggle('overflow');
//       });
//   };
//
//   /* -------------------------------------- */
//
//   const parentLink = document.querySelector<HTMLElement>('.navigation__item_parent');
//   const childLink = document.querySelector<HTMLElement>('.navigation__link');
//   if  (parentLink != null) {
//     parentLink.querySelector('.navigation__link').removeAttribute('href');
//     parentLink.addEventListener('click', function(){
//       this.classList.toggle('navigation__item_opened');
//       parentLink.querySelector('.navigation__sublist').classList.toggle('navigation__sublist_opened');
//     });
//     document.onmouseup = function(event){
//       let $target = event.target;
//       if ($target != null && $target.matches('.navigation__item_parent') == false) {
//         console.log($target);
//         parentLink.classList.remove('navigation__item_opened');
//         parentLink.querySelector('.navigation__sublist').classList.remove('navigation__sublist_opened');
//       }
//
//     }
//   };
//
//
//
// });
