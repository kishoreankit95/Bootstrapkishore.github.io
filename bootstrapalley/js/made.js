
$(document).ready(function(){

  $(window).scroll(function(){
    if ($(this).scrollTop() > 150) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
  });


  //

  $(window).on("load", function(){ 
    var range = $("#range").attr("value");
    $("#demo").html(range);
    $(".slide").css("width", "50%");
    $(document).on('input change', '#range', function() {
      $('#demo').html( $(this).val() );
      var slideWidth = $(this).val() * 100 / 50000;
      
      $(".slide").css("width", slideWidth + "%");
    });
  });

  //  



  $(".drop-down").on("click", dropdowns);

  function dropdowns () {
    $(this).children(".drop-list").toggleClass("show");
    console.log("hii");
  }
  
  $(".on-off").on("click", shiftdot);

  function shiftdot() {
    $(this).toggleClass("switch");    
  }

  $(".header .header__icons a").on("click", addclickeff);

  function addclickeff () {
    $(".header .header__icons a").removeClass("active");
    $(this).addClass("active");
  }


  //Increasing Counter Value
  $(".btn-addv").on("click", incvalu);

  function incvalu () {
    var capinp = $(this).siblings(".btn-totv");
    var capini = capinp.val();
    var incval = ++capini;
    capinp.val(incval);
  }

  //Decreasing Counter Value
  $(".btn-decv").on("click", decvalu);

  function decvalu () {
    var capinp = $(this).siblings(".btn-totv");
    var capini = capinp.val();
    var incval = --capini;
    if(capini <= 0) {
      capinp.val(0);
    }
    else{
      capinp.val(incval);
    } 
  }


  // Home page Tab input button keypress
  $("#home .btn-totv").on("change", addfooditem);

  var target1 = $("#drinks");
  

  function addfooditem () {
    var inpval = $(this).val();

    //Picking text from item menu
    var itmname = $(this).parent().siblings("h4").text();
    var itmuprice = $(this).parent().siblings("p").children(".unit-pric").text();

    // Calculating costs for invoice breakup
    var totcost = itmuprice*inpval;
    var totcostPre = totcost.toPrecision(3);
    var netprice = parseFloat(totcostPre);
    

    //Price change in Invoice section
    // var categTotalini = $("#drinks .categ-total").text();
    

    // Check if item already in invoice section
    

        
    

    // if (inpval > 0) {
    //   const adddiv = document.createElement("div");

    //   adddiv.className = "sep-items";

    //   adddiv.innerHTML = `
    //   <p class="fd__name">` + itmname + `</p>
    //   <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
    //   <p class="fd__tot">`+ "$" + netprice + `</p> `;

    //   target1.append(adddiv);
      
    // }

    var checks2 = $("#drinks .sep-items .fd__name");
    console.log(checks2);

    if(checks2.length === 0) {
      const adddiv = document.createElement("div");

      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target1.append(adddiv);
      console.log("1st Loop");
      // target1.getElementById
    }    
    else if(checks2.length > 0){
      for (var i=0; i<checks2.length; i++) {
        var checkstxt = checks2[i].innerText;
        
        if(checkstxt == itmname) {
          var getinstance = checks2[i];
          var instanceParent = getinstance.parentElement;
          instanceParent.innerHTML = 
          `<p class="fd__name">` + itmname + `</p>
          <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
          <p class="fd__tot">`+ "$" + netprice + `</p> `;
          // var anki2 = anki1.getElementByClassName("fd__brkup");
          // var brkupto = checks2[i].parent().children(".fd__brkup");
          // var brkupinsrt = itmuprice + "x" + inpval;
          // var brkuptocopy = brkupto.text(brkupinsrt);
          // var nettocopy = (itmuprice*inpval);
          var categTotalini1 = $("#drinks .categ-total").text();
          var categTotalNum = parseFloat(categTotalini1);
          var categTotal = categTotalNum + netprice;
          $("#drinks .categ-total").text(categTotal);
          // checks2[i].siblings(".fd__brkup").text()
          console.log("no more");
          // console.log(nettocopy);
          console.log(ank1);
          console.log(anki1);
          return;
        }
      }
      const adddiv = document.createElement("div");
  
      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target1.append(adddiv);
      console.log("adding");
      // addsepitemblock(target1);
      console.log("2nd Loop");
    }


    //Check if item already in invoice section
    // var checkitem1 = $("#drinks .sep-items .fd__name").text();
    // console.log(checkitem1);

    // if(itmname == checkitem1){
    //   console.log("Found");
    // }

    //Picking text from breakup headers of three regions
    var categTotalini1 = $("#drinks .categ-total").text();
    // console.log(categTotalini1);
    var categTotalini2 = $("#food .categ-total").text();
    var categTotalini3 = $("#desert .categ-total").text();


    var categTotalNum = parseFloat(categTotalini1);
    var categTotal = categTotalNum + netprice;
    // console.log(categTotalNum);
    // console.log(categTotal);

    $("#drinks .categ-total").text(categTotal);

    // Targetting summary section
    var choutbasic = $(".chkout-summ .chkout-sep p .chkout-basic");
    var chouttax = $(".chkout-summ .chkout-sep p .chkout-tax");
    var choutdisc = $(".chkout-summ .chkout-sep p .chkout-disc");
    var chouttotl = $(".price-chkut .btn-hold .chkout-totl");


    //Calculating Invoice breakup and total checkout calculations
    var choutbasictx = parseFloat(categTotal) + parseFloat(categTotalini2) + parseFloat(categTotalini3);
    var chouttaxtx = (choutbasictx*0.18).toPrecision(3);
    var chouttaxtx4 = parseFloat(chouttaxtx);
    var chouttotltx = (choutbasictx + chouttaxtx4);

    // console.log(choutbasic);
    // console.log(chouttax);
    choutbasic.text(choutbasictx);
    chouttax.text(chouttaxtx);
    chouttotl.text(chouttotltx);



    // console.log("ck");
    return netprice;
  }

  function addsepitemblock (focusin) {
    const adddiv = document.createElement("div");
  
    adddiv.className = "sep-items";

    adddiv.innerHTML = `
    <p class="fd__name">` + itmname + `</p>
    <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
    <p class="fd__tot">`+ "$" + netprice + `</p> `;

    focusin.append(adddiv);
    console.log("adding");
  }


  // Profile page Tab input button
  $("#profile .btn-totv").on("change", addfooditem2);

  var target2 = $("#food");
  // var categTotalini2 = $("#food .categ-total").text();

  function addfooditem2 () {
    var inpval = $(this).val();

    var itmname = $(this).parent().siblings("h4").text();
    var itmuprice = $(this).parent().siblings("p").children(".unit-pric").text();

    var totcost = itmuprice*inpval;
    var totcostPre = totcost.toPrecision(3);
    var netprice = parseFloat(totcostPre);
    
    // var categTotalini = $("#food .categ-total").text();

    if (inpval > 0) {
      const adddiv = document.createElement("div");

      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target2.append(adddiv);

      // categTotal.text(netprice);
      
    }

    var categTotalNum = parseFloat(categTotalini2);
    var categTotal = categTotalNum + netprice;

    $("#food .categ-total").text(categTotal);

    // console.log("ck");
    return netprice;
  }


  // contact page Tab input button
  $("#contact .btn-totv").on("change", addfooditem3);

  var target3 = $("#desert");
  // var categTotalini3 = $("#desert .categ-total").text();

  function addfooditem3 () {
    var inpval = $(this).val();

    var itmname = $(this).parent().siblings("h4").text();
    var itmuprice = $(this).parent().siblings("p").children(".unit-pric").text();

    var totcost = itmuprice*inpval;
    var totcostPre = totcost.toPrecision(3);
    var netprice = parseFloat(totcostPre);
    
    // var categTotalini = $("#desert .categ-total").text();

    if (inpval > 0) {
      const adddiv = document.createElement("div");

      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target3.append(adddiv);

      // categTotal.text(netprice);
      
    }

    var categTotalNum = parseFloat(categTotalini3);
    var categTotal = categTotalNum + netprice;

    $("#desert .categ-total").text(categTotal);

    // console.log("ck");
    return netprice;
  }


  $("#home .btn-addv").on("click", checkfunc1);
  
  function checkfunc1 () {

    var tempstr1 = $(this).siblings(".btn-totv").val();
    console.log(typeof(tempstr1));

    var itmname = $(this).parent().siblings("h4").text();
    var itmuprice = $(this).parent().siblings("p").children(".unit-pric").text();

    var totcost = itmuprice*tempstr1;
    var totcostPre = totcost.toPrecision(3);
    var netprice = parseFloat(totcostPre);

    if (tempstr1 > 0) {
      const adddiv = document.createElement("div");

      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + tempstr1 + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target1.append(adddiv);

      // categTotal.text(netprice);
      
    }


  }



});



