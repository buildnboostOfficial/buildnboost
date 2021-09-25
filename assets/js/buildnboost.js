$(document).ready(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("is-active");
    $("#drawer").toggleClass("open");
    $("body").toggleClass("scroll-lock");
  });

  $("body").mousemove(function (e) {
    $("#cursor").animate(
      {
        left: e.pageX - 8,
        top: e.pageY - 8,
      },
      100
    );
  });
});
