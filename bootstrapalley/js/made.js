
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

  var benefitd = document.getElementById("benefits");
  var benefitsc = (benefitd.offsetTop - 150);
  var facilityd = document.getElementById("facilities");
  var facilitiesc = (facilityd.offsetTop - 150);
  var galleryd = document.getElementById("gallery");
  var galleryc = (galleryd.offsetTop - 150);
  var pricingd = document.getElementById("pricing");
  var pricingc = (pricingd.offsetTop - 150);
  var contactd = document.getElementById("contact");
  var contactc = (contactd.offsetTop - 150);
  var footerd = document.getElementById("footer");
  var footerc = (footerd.offsetTop - 150);
  
  // console.log(benefitsc);

  $(".benefits").on("click", function () {
    $(window).scrollTop(benefitsc);
    console.log(benefitsc);
  });
  $(".facilities").on("click", function () {
    $(window).scrollTop(facilitiesc);
    console.log(facilitiesc);
  });
  $(".gallery").on("click", function () {
    $(window).scrollTop(galleryc);
    console.log(galleryc);
  });
  $(".pricing").on("click", function () {
    $(window).scrollTop(pricingc);
    console.log(pricingc);
  });
  $(".contact").on("click", function () {
    $(window).scrollTop(contactc);
    console.log(contactc);
  });
  $(".down-arrow .arrow").on("click", function () {
    $(window).scrollTop(footerc);
    console.log(footerc);
  });
 



  

    



});



