
$(document).ready(function(){

  // Tabs page tabs
  // $('.tabs').tabs();

  // Collapsible for Course Tabs page
  // $('.collapsible').collapsible();

  $(".drop-down").on("click", dropdowns);

  function dropdowns () {
    $(this).children(".drop-list").toggleClass("show");
    console.log("hii");
  }
  
  
  

});

