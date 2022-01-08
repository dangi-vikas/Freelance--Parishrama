$(document).on("scroll", function () {
  if
    ($(document).scrollTop() > 100) {
    $("#header").addClass("header-fixed");
  }
  else {
    $("#header").removeClass("header-fixed");
  }
});

$('.owl-carousel.main-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
  }
})

$('.owl-carousel.long-course-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
  }
})

$('.owl-carousel.testimonials-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    },
    1300: {
      items: 4
    }
  }
})