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
});
