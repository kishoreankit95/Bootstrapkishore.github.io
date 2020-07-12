(function ($) {
  $(function () {
    //Side nav coolapse
    $(document).ready(function () {
      $(".collapsible").collapsible();
    });

    // Header dropdown js
    //header other site dropdown
    $("#othersite-dropdown > .dropdown-trigger").dropdown({
      inDuration: 282,
      outDuration: 225,
      hover: false, // Activate on click
      belowOrigin: true, // Displays dropdown below the button
      alignment: "left", // Displays dropdown with edge aligned to the left of button
    });

    //Mobile search
    $(".btn-search-mob").on("click", function (e) {
      $(".mobile-search").addClass("active");
      e.stopPropagation();
    });
    $(document).on("click", function (e) {
      if ($(e.target).is(".mobile-search input") === false) {
        $(".mobile-search").removeClass("active");
      }
    });

    //header main category dropdown
    $("#cat-drop-trigger > .dropdown-trigger").dropdown({
      inDuration: 282,
      outDuration: 225,
      hover: false, // Activate on click
      belowOrigin: true, // Displays dropdown below the button
      alignment: "left", // Displays dropdown with edge aligned to the left of button
    });

    //header subcategory dropdown
    // $("#sub-drop-select > select").formSelect();
    $("#sub-drop-select > .dropdown-trigger").dropdown({
      inDuration: 282,
      outDuration: 225,
      hover: false, // Activate on click
      belowOrigin: true, // Displays dropdown below the button
      alignment: "left", // Displays dropdown with edge aligned to the left of button
    });

    //payment page
    
    $('.payment-pin').each(function() {
      var $this = $(this);
      var $target = $('#' + $(this).attr('data-target'));
      $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
    });
    $('#parentOne').css( 'width', $('.paymentWrap').width()*0.60 );
    $('.payment-pin').css( 'width', $('.paymentWrap').width()*0.24 );

// payment page

$(".overseasDeliveryWrap").hide();
$(".overseas-delivery-option").hover(
  function () {
    $(".overseasDeliveryWrap").show();
  },
  function () {
    $(".overseasDeliveryWrap").hide();
  }
);
$("a.close").click(function () {
  $(".overseasDeliveryWrap").hide();
});

//My Page recruiter list toggle

$(function () {
  $(".recr-list-btn").click(function (e) {
    $(".recr-drpdown-content").addClass("active") &&
      $(".recr-list-btn").addClass("active");
    e.stopPropagation();
  });
  $(document).click(function (e) {
    if ($(e.target).is(".recr-drpdown-content") === false) {
      $(".recr-drpdown-content").removeClass("active") &&
        $(".recr-list-btn").removeClass("active");
    }
  });
});

  // instructor list page floating button
  
  $(".floatingDownload").click(function () {
    $(".btn-floating").addClass("show");
  });
  $(".floatingModal .modal-overlay").click(function(){
    $(".btn-floating").removeClass("show");
  });
  $(".modal-close").click(function () {
    $(".modal").close();
    $(".btn-floating").removeClass("show");
  });
  // ========================================================
    
    $(".product-summary-nav").each(function () {
          var $this = $(this);
          var $target = $("#" + $(this).attr("data-target"));
          $this.pushpin({
            top: $target.offset().top,
            bottom: $('#footer').offset().top - $('.product-summary-tabs').outerHeight()
            //width: $target.offset().length
          });
        });


    $(".product-price-float").each(function () {
      var $this = $(this);
          var $target = $("#" + $(this).attr("data-target"));
          $this.pushpin({
            top: $target.offset().top,
            bottom: $('#float-management').offset().top - $('.floating-price').outerHeight()
            //width: $target.offset().length
          });        
    });
      

    // $('#parentTwo .floating-price').pushpin({ 
    //   top: $('.adbanner').outerHeight(),
    //   bottom: $('#footer').offset().top - $('.floating-price').outerHeight()     
    // });
    
    $('#parentOne').css( 'width', $('.bookDetailsWrap').width()*0.60 );
    $('#parentTwo .floating-price').css( 'width', $('.bookDetailsWrap').width()*0.31 );

    //sticky nav width control
    var parentOnewidth = $("#parentOne").width();
    $(".product-summary-tabs").width(parentOnewidth);

    // var parentTwowidth = $("#parentTwo").width();
    // $(".floating-price").width(parentTwowidth);

    $(".floating-price-recommendation > .carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: false,
    });

    // move next carousel
    $(".moveNextCarousel").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".carousel").carousel("next");
    });

    // move prev carousel
    $(".movePrevCarousel").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".carousel").carousel("prev");
    });

    // Intro page
    //Intro page banner slider
    $("#intro-slider > .carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: true,
      autoPlay: true,
    });

    // Event banner autoplay
    autoplay();
    function autoplay() {
      $("#intro-slider > .carousel").carousel("next");
      setTimeout(autoplay, 4500);
    }

    //Search auto complete
    $("input.autocomplete").autocomplete({
      data: {
        Apple: null,
        Microsoft: null,
        Google: null,
      },
    });

    // Category home page
    // category-hero banner owl
    $("#category-hero-slider > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: true,
      autoplay: true,
      items: 1,
      // responsive: {
      //   0: {
      //     items: 1
      //   },
      //   600: {
      //     items: 1
      //   },
      //   1000: {
      //     items: 1
      //   }
      // }
    });

    // category-featured lecture product slider
    $("#category-featured-lectures > .carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: false,
    });

    // category-featured books product slider
    $("#category-featured-books > .carousel.carousel-slider").carousel({
      fullWidth: true,
      indicators: false,
    });

    //Intro event owl
    $("#intro-banner-slider > .owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      autoplay: true,
      dots: false,
      items: 1,
      // navText: [
      //   "<img src='../dist/assets/icons/icon-nav-prev.svg'>",
      //   "<img src='../dist/assets/icons/icon-nav-next.svg'>"
      // ],
      // responsive: {
      //   0: {
      //     items: 1
      //   },
      //   600: {
      //     items: 1
      //   },
      //   1000: {
      //     items: 1
      //   }
      // }
    });

    //Lecture category
    $("#category-featured-lectures > .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/icon-nav-prev-new.svg'>",
        "<img src='../dist/assets/icons/icon-nav-next-new.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        641: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //Book category
    $("#category-featured-books > .owl-carousel").owlCarousel({
      loop: false,
      margin: 50,
      nav: true,
      dots: false,
      //autoWidth: true,
      navText: [
        "<img src='../dist/assets/icons/icon-owl-prev-no-border.svg'>",
        "<img src='../dist/assets/icons/icon-owl-next-no-border.svg'>",
      ],
      responsive: {
        0: {
          items: 2,
        },
        641: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    //DV-Book category NEW

    $("#carousal-dv-books-new > .owl-carousel").owlCarousel({
      loop: false,
      margin: 40,
      nav: true,
      dots: false,
      items: 3,
      navText: [
        "<img src='../dist/assets/icons/icon-dvbook-owl-prev.svg'>",
        "<img src='../dist/assets/icons/icon-dvbook-owl-next.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //Dvbook category
    $("#category-featured-dvbook > .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/icon-nav-prev.svg'>",
        "<img src='../dist/assets/icons/icon-nav-next.svg'>",
      ],
      responsive: {
        0: {
          items: 2,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 4,
        },
      },
    });

    //Book Main page book package scroll
    $("#book-package-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        550:{
          items: 1.5,
        },
        768: {
          items: 2,
        }
      },
    });

    //Book Main page book recommendation scroll
    $("#book-recommended-scroll > .carousel").carousel({
      numVisible: 7,
      // fullWidth: true,
      dist: -45,
      shift: 0,
      responsive: {
        0: {
          items: 1,
        },
        641: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //category home page 3
    $("#japaneseJournalScroll > .carousel").carousel({
      numVisible: 5,
      //fullWidth: true,
      dist: -100,
      shift: 0,
    });

    //Lecture Main page lecture package scroll
    $("#lecture-package-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 50,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        641: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    //Lecture Main page lecture recommendation scroll
    $("#lecture-recommended-scroll > .carousel").carousel({
      numVisible: 5,
      dist: -50,
      shift: 0,
    });

    //Lecture Main page lecture testimonial scroll
    $("#lecture-testimonial-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        641: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // lecture main page top 5 books scroll for mobile view
    $("#top4book-scroll > .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: false,
      items: 1.5,
    });

     // Book main page top 5 books scroll for mobile view
     $("#top4book-scrol > .owl-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      items: 1.5,
    });

    // lecture main page header banner mobile view
    $("#bannerlecturehead-scroll > .owl-carousel").owlCarousel({
      loop: false,
      autoPlay: true,
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      dots: true,
      items: 1
    });

    // Book main page header banner mobile view
    $("#bannerbookhead-scroll > .owl-carousel").owlCarousel({
      loop: true,
      autoPlay: true,
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      dots: true,
      items: 1
    });

    // category type 3 page header banner mobile view
    $("#banner-block-scroll > .owl-carousel").owlCarousel({
      loop: false,
      autoPlay: true,
      autoplayTimeout: 3000,
      margin: 30,
      nav: false,
      dots: true,
      items: 1
    });

    //Mp3 page modal
    $(".modal").modal();
    //Book details page book package scroll
    $("#book-details-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/details-arrow-left.svg'>",
        "<img src='../dist/assets/icons/details-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    //DvBook details page book package scroll
    $("#dvbook-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/details-arrow-left.svg'>",
        "<img src='../dist/assets/icons/details-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 2,
        },
      },
    });

    //Book series list page series banner scroll
    $("#series-banner-scroll > .owl-carousel").owlCarousel({
      loop: true,
      //margin: 10,
      nav: true,
      center: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 3,
        },
        768: {
          items: 5
        },
        1000: {
          items: 5,
        },
      },
    });

    //Book series list page series banner scroll
    $("#lecture-series-banner-scroll > .owl-carousel").owlCarousel({
      loop: true,
      //margin: 10,
      nav: true,
      center: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        641: {
          items: 3,
        },
        1000: {
          items: 3,
        },
      },
    });

    //Lecture details page series banner scroll
    $(".tooltipped").tooltip({
      html: '<p class="toolstyle">80% 이상 수강 시</p>',
      margin: -4,
    });
    $(".tabs").tabs();

    $("#series-goods-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1.5,
          nav: false
        },
        641: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // Recommended slide down
    $(".recommended-course-box").click(function () {
      $(
        ".recommended-course-description, .recommended-course-arrow"
      ).removeClass("ld-open");
      $(this)
        .children(".recommended-course-description, .recommended-course-arrow")
        .addClass("ld-open");
    });
    //
    $("#instructor-introduction > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      dots: false,
      items: 1,
      center: true,
      URLhashListener: true,
      autoplayHoverPause: true,
      startPosition: "URLHash",
    });
    // recommended-product-scroll
    $("#product-recommend-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        641: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // Lecture package detail
    $("#pack-all-detail").owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      dots: true,
      nav: false,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    $("#lecture-package-list").owlCarousel({
      loop: true,
      margin: 0,
      items: 1,
      nav: true,
      dots: true,
      nav: false,
    });

    // My page purchase history tab view
    $(".history-tabs > .tabs").tabs();

    // My page purchase history tab view owl scroll
    $("#history-tab-scroll > .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        500: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });

    // Mypage notification list more menu with dropdown
    $(".notification-list .dropdown-trigger").dropdown();

    // Mypage order list left side menu collapsible
    $(".mypage-order-list .collapsible").collapsible();

    // Mypage order list left side menu collapsible
    $(".purchase-history-title > .collapsible").collapsible();

    //My page mobile menu toggle
    $(".mobile-only").click(function () {
      $(".mobile-menu").toggleClass("active");
    });

    $(".collapsible").collapsible();


    // My page order list filter datepicker
    $("#datepickera").datepicker();
    $("#datepickerb").datepicker();

    //Mypage wishlist items checkbox control
    $(".check").click(function (e) {
      e.preventDefault();
      var $row = $(this).closest("tr");
      $($row).toggleClass("active");
    });

    //Customer center datepicker
    $("#datepickerc").datepicker();
    $("#datepickerd").datepicker();
    //Customer center dropdown
    $(".dropdown-trigger").dropdown();

    //my study with content scroll
    $("#mystudy-lecture-scroll > .owl-carousel").owlCarousel({
      responsive: {
        0: {
          loop: true,
          margin: 5,
          nav: false,
          items: 1.1,
        },
        768: {
          loop: true,
          margin: 10,
          nav: true,
          items: 1,
        }
      },
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
    });

    //my study education materials select option
    $(".em-size").hide();
    $("#option1").show();
    $("#em-select").change(function () {
      $(".em-size").hide();
      $("#" + $(this).val()).show();
    });

    // my study mp3 list title tabs
    $("#msMusick-player-tab").owlCarousel({
      margin: 0,
      loop: false,
      dots: false,
      nav: true,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      items: 1,
      autoplay: false,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 4,
          nav: false,
        },
        600: {
          items: 6,
        },
        1000: {
          items: 10,
        },
        1200: {
          items: 12,
        },
      },
    });

    //payment page

    $("#order-completed > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        360: {
          items: 1.4,
        },
        768: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // recommended-instructor-book 
    $("#recom-instructor-book-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        360: {
          items: 1.4,
        },
        768: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    // recom-instructor-materials-scroll
    $("#recom-instructor-materials-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      items: 1
    });

    // other language home banner
    $("#ol-banner-thumb-scroll > .owl-carousel").owlCarousel({
      loop: false,
      margin: 10,
      nav: false,
      dots: true,
      items: 1
    });

    // other language new released books
    $("#other-lang-newreleased-books > .owl-carousel").owlCarousel({
      loop: false,
      margin: 50,
      nav: true,
      dots: false,
      //autoWidth: true,
      navText: [
        "<img src='../dist/assets/icons/icon-owl-prev-no-border.svg'>",
        "<img src='../dist/assets/icons/icon-owl-next-no-border.svg'>",
      ],
      responsive: {
        0: {
          items: 1.5,
        },
        641: {
          items: 3,
        },
        1000: {
          items: 6,
        },
      },
    });
    
    // payment page not membership process

    // $(".notMember").hide();
    // $(".not-membership").hover(function(){
    //   $(".notMember").fadeIn();
    //   }, function(){
    //     $(".notMember").fadeOut();
    // });

    // filter menu mobile for list and grid view
    $(".icon-preview").on("click", function () {
      $(".cover").fadeIn("slow");
      $(".filterWrap").removeClass("hide");
      $(".filterWrap").addClass("show");
      //filter for search result mobile view
      $(".search-filter-mobile").removeClass("hide");
      $(".search-filter-mobile").addClass("show");
    });

    $(".inp, .cover").on("click", function () {
      $(".cover").fadeOut("slow");
      $(".filterWrap").addClass("hide");
      //filter for search result mobile view
      $(".search-filter-mobile").addClass("hide");
    });

    //filter for search result mobile view

    //Company information page Owl Carousel
    $("#ci-scroll > .owl-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      items: 4,
      navText: [
        "<img src='../dist/assets/icons/owl-arrow-left.svg'>",
        "<img src='../dist/assets/icons/owl-arrow-right.svg'>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1.2,
        },
        510: {
          items: 1.5,
        },
        640:{
          items: 1.75,
        },
        768: {
          items: 1.9,
        },
        820: {
          items: 2.3,
        },
        1000: {
          items: 2.8,
        },
        1140: {
          items: 3.2,
        },
        1300: {
          items: 4
        },
      },
    });


  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.product-price-float').pushpin({
      top: $('.product-summary').offset().top,
      bottom: $('#float-management').offset().top - $('.floating-price').outerHeight()
    });

  });
