(function ($) {
  "use strict";

  /* ====================================================
   			Sticky Menu JS
   ==================================================== */

  var sticky = $(".navbar-area");

  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();

    if (scroll < 120) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
})(jQuery);
