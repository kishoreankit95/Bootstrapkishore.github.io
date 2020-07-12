(function($){
  $(function(){

    // Sidenav menu initialization
    $('.sidenav').sidenav();

    // Image initialization
    $('.materialboxed').materialbox();

    // Select menu initialization
    $('select').formSelect();

    //pushpin sticky initialization
    $(document).ready(function(){
      $('.pushpin').pushpin();
    });

    //Scrollspy
    $('.scrollspy').scrollSpy();

    //Carousel
    $('.carousel').carousel();
    

  }); // end of document ready
})(jQuery); // end of jQuery name space
