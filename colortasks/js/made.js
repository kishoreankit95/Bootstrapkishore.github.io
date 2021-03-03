
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

  $('.boxcont .owl-carousel').owlCarousel({
    loop: false,
    margin: 10,
    items: 1.5,
    nav: false,
    dots: false,
    center: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1.3
      },
      
    }
  });





});



