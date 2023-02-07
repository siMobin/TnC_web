// swiper .....................

// var swiper = new Swiper(".mySwiper", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

// swiper loop.....................

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: false,//for autoplay, line 30
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
//stop transition
  effect: 'fade',
  fadeEffect: {
    crossFade: false
  },//
  autoplay: {
    delay: 2000,
  },
});

// ..................see more........................

function toggle() {
  var content = document.querySelector('.content');
  content.classList.toggle('show-more');
  content.classList.toggle('show-less');
}