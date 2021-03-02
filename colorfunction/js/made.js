
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
  });


  $('.smbox').on("click", changeColor);

  function changeColor () {    
    var border = $(this).css("border-color");
    var smaller = $('.smbox');
    var larger = $('.largebox');
    smaller.css({"background-color": "#fff", "color" : "#212529"})
    $(this).css({"background-color": border, "color" : "#fff"});
    larger.css({"background-color": border, "border-color": border});
    console.log(border);
  }





});



