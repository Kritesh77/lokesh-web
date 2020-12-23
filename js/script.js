$(document).ready(function () {
  $(".toggle-menu-icon").click(function () {
    $(".menu-container").fadeIn(1);
    $(".hidden-menu").css("width", "70%");
    $(".hidden-menu").css("padding", "30px");
    $(".menu-background").css("background-color", "rgba(0,0,0,0.4)");
    $("body").css("overflow", "hidden");
  });

  $(".hide-menu-icon").click(function () {
    $(".hidden-menu").css("padding", "0px");
    $(".hidden-menu").css("width", "0px");
    $(".menu-container").delay(600).fadeOut();
    $(".menu-background").css("background-color", "rgba(0,0,0,0)");
    $("body").css("overflow", "");
  });

  $(".menu-background").click(function () {
    $(".hidden-menu").css("padding", "0px");
    $(".hidden-menu").css("width", "0px");
    $(".menu-container").delay(600).fadeOut();
    $(".menu-background").css("background-color", "rgba(0,0,0,0)");
    $("body").css("overflow", "");
  });

  $("#portfolio").click(function () {
    $(".portfolio-ul li").each(function (i) {
      $(this)
        .delay(100 * i)
        .fadeToggle();
    });
    $("#portfolio").toggleClass("fa-rotate-180");
  });
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $("header").addClass("active");
    } else {
      $("header").removeClass("active");
    }
  });

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let birthday = "Dec 30, 2020 00:00:00",
      countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        let now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(
          distance / day
        )),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        //do something later when date is reached
        if (distance < 0) {
          let headline = document.getElementById("headline"),
            countdown = document.getElementById("countdown"),
            content = document.getElementById("content");

          headline.innerText = "It's time to party !";
          countdown.style.display = "none";
          content.style.display = "block";

          clearInterval(x);
        }
        //seconds
      }, 0);
  })();
});
