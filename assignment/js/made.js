
$(document).ready(function(){

  // Course Tabs page tabs
  $('.tabs').tabs();

  // Collapsible for Course Tabs page
  $('.collapsible').collapsible();


  $('.course-row').hover(function () {
    $(this).addClass("active");
    }, 
    function () {
      $(this).removeClass("active");
  });
  

});

