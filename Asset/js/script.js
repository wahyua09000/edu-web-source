let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar-nav");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navbar.classList.remove("active");
};

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 50) {
    $("nav").css("background", "white");
    $(".a1").css("color", "black");
    $(".a1").hover(
      function () {
        $(this).css("color", "#82cd47");
      },
      function () {
        $(this).css("color", "black");
      }
    );
  } else {
    $("nav").css("background", "transparent");
    $(".a1").css("color", "white");
    $(".a1").hover(
      function () {
        $(this).css("color", "#82cd47");
      },
      function () {
        $(this).css("color", "white");
      }
    );
  }
});
