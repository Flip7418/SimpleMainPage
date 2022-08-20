$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header-burger,.nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
