const owl = $(".owl-carousel");
owl.owlCarousel({
  responsive: {
    // breakpoint from 0 up
    0: {
      loop: true,
      items: 1,
    },
    // breakpoint from 480 up
    581: {
      margin: 20,
      items: 2,
      loop: true,
    },
    // breakpoint from 768 up
    769: {
      center: true,
      margin: 20,
      startPosition: 1,
      items: 3,
      loop: true,
    },
    896: {
      items: 2,
      loop: true,
    },
    // breakpoint from 1024 up
    1025: {
      center: true,
      loop: true,
      margin: 30,
      startPosition: 1,
    },
  },
});
$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});
$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// Nav
const navBtn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const menuIcon = document.querySelector(".menu-icon");

navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon-active");
};

// document.querySelector(".menu-icon-wrapper").onclick = function () {
//   document.querySelector(".menu-icon").classList.toggle("menu-icon-active");
// };
