$(document).ready(function () {
  var height = $(window).height();
  var header_height = document
    .getElementById("header")
    .getBoundingClientRect().height;

  $(".set-height").css("height", height - header_height);

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

  // document.documentElement.style.cursor = 'none'; // uncomment this line to hide cursor
  const cursor = document.querySelector(".cursor"); // Select cursor div

  document.addEventListener(
    "mousemove",
    (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 7) + "px; left: " + (e.pageX - 7) + "px;"
      );
    },
    100
  ); // Follow mouse pointer

  document.addEventListener("click", () => {
    cursor.classList.add("expand");

    setTimeout(() => {
      cursor.classList.remove("expand");
    }, 500);
  }); // trigger pointer onClick animation
});
