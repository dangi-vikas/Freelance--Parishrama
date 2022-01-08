$(document).on("scroll", function () {
  if ($(document).scrollTop() > 100) {
    $("#header").addClass("header-fixed");
  } else {
    $("#header").removeClass("header-fixed");
  }
});

$(".owl-carousel.main-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel.long-course-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

$(".owl-carousel.testimonials-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1300: {
      items: 4,
    },
  },
});

//Number change

$(function () {
  var fx = function fx() {
    $(".stat-number").each(function (i, el) {
      var data = parseInt(this.dataset.n, 10);
      var props = {
        from: {
          count: 0,
        },
        to: {
          count: data,
        },
      };
      $(props.from).animate(props.to, {
        duration: 1000 * 1,
        step: function (now, fx) {
          $(el).text(Math.ceil(now));
        },
        complete: function () {
          if (el.dataset.sym !== undefined) {
            el.textContent = el.textContent.concat(el.dataset.sym);
          }
        },
      });
    });
  };

  var reset = function reset() {
    //console.log($(this).scrollTop())
    if ($(this).scrollTop() > 90) {
      $(this).off("scroll");
      fx();
    }
  };

  $(window).on("scroll", reset);
});
