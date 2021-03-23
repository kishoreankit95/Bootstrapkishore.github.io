
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
  });


  



  $(".drop-down").on("click", dropdowns);

  function dropdowns () {
    $(this).children(".drop-list").toggleClass("show");
    console.log("hii");
  }
  
  

  $(".header .header__icons a").on("click", addclickeff);

  function addclickeff () {
    $(".header .header__icons a").removeClass("active");
    $(this).addClass("active");
  }


 



  

    



});



