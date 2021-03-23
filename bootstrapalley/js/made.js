
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
  var galleryd = document.getElementById("facilities");
  var galleryc = (facilityd.offsetTop - 150);
  var facilityd = document.getElementById("facilities");
  var facilitiesc = (facilityd.offsetTop - 150);
  var facilityd = document.getElementById("facilities");
  var facilitiesc = (facilityd.offsetTop - 150);
  
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
    $(window).scrollTop(benefitsc);
    console.log(benefitsc);
  });
  $(".pricing").on("click", function () {
    $(window).scrollTop(benefitsc);
    console.log(benefitsc);
  });
  $(".contact").on("click", function () {
    $(window).scrollTop(benefitsc);
    console.log(benefitsc);
  });
 



  

    



});



