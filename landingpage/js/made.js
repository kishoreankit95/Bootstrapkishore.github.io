$(document).ready(function () {
  
  // Bottom scroll sync when top slided
  $('.top-row').on("scroll", function () {
      $('.btm-row').scrollLeft($(this).scrollLeft());
  });

  // Top scroll sync when bottom slided
  $('.btm-row').on("scroll", function() {
    $('.top-row').scrollLeft($(this).scrollLeft());
  });
  
});