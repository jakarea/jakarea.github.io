(function ($) {
  $(document).ready(function () {
    $(".header .navbar").onePageNav({
      currentClass: "current",
      changeHash: false,
      scrollSpeed: 750,
    });
  });
  $(window).load(function () {
    $("#loading").delay(350).fadeOut("slow");
  });
})(jQuery);


