$(document).ready(function(){

    // $('.ch-page-tabs .tabs').tabs();

    
    // $('#chinese-banner .owl-carousel').owlCarousel({
    //   loop: true,
    //   items: 1,
    //   nav: false,
    //   URLhashListener: true,
    //   startPosition: 'URLHash',
    //   dots: false,
    //   smartSpeed: 750,
    //   autoplayHoverPause: true
    // });

    $('#chinese-banner .owl-carousel').owlCarousel({
      items: 1,
      autoplay: false,
      loop: false,
      center: true,
      margin: 10,
      touchDrag: false,
      mouseDrag: false,
      dots: false,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: 'URLHash',
      smartSpeed: 750
    });

    // $('#tab-content .owl-carousel').owlCarousel({
    //   items: 1,
    //   autoplay: false,
    //   loop: false,
    //   touchDrag: false,
    //   mouseDrag: false,
    //   center: true,
    //   dots: false,
    //   margin: 10,
    //   URLhashListener: true,
    //   autoplayHoverPause: true,
    //   startPosition: 'URLHash',
    //   smartSpeed: 750
    // });

    // $('.ch-page-tabs .tab-change').click(function(){
    //   $(this).css("background", "#536EB4");
    // });

    var $li = $('.ch-page-tabs .tab-change').click(function() {
      $li.removeClass('selected');
      $(this).addClass('selected');
      
    });

    var $lisst = $('.ch-page-tabs .tab-change a').click(function() {
      $lisst.removeClass('figured');
      $(this).addClass('figured');
    });

    $("div.ch-tab-card").hover(function(){
      $('.card-link a', this).css("color", "#9B9B9B");
      }, function(){
      $('.card-link a').css("color", "#CACACA");
    });
  
  });