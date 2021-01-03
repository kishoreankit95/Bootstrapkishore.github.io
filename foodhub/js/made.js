
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


    
    

    if (inpval > 0) {
      const adddiv = document.createElement("div");

      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target1.append(adddiv);
      
    }


    //Check if item already in invoice section
    // var checkitem1 = $("#drinks .sep-items .fd__name").text();
    // console.log(checkitem1);

    // if(itmname == checkitem1){
    //   console.log("Found");
    // }

    //Picking text from breakup headers of three regions
    var categTotalini1 = $("#drinks .categ-total").text();
    console.log(categTotalini1);
    var categTotalini2 = $("#food .categ-total").text();
    var categTotalini3 = $("#desert .categ-total").text();


    var categTotalNum = parseFloat(categTotalini1);
    var categTotal = categTotalNum + netprice;
    // console.log(categTotalNum);
    // console.log(categTotal);

    $("#drinks .categ-total").text(categTotal);

    // Targetting summary section
    var choutbasic = $(".chkout-summ .chkout-sep p .chkout-basic");
    // var choutbasictx = $(".chkout-summ .chkout-sep p .chkout-basic").text();
    var chouttax = $(".chkout-summ .chkout-sep p .chkout-tax");
    // var chouttaxtx = $(".chkout-summ .chkout-sep p .chkout-tax").text();
    var choutdisc = $(".chkout-summ .chkout-sep p .chkout-disc");
    // var choutdisctx = $(".chkout-summ .chkout-sep p .chkout-disc").text();
    var chouttotl = $(".price-chkut .btn-hold .chkout-totl");
    // var chouttotltx = $(".price-chkut .btn-hold .chkout-totl").text();

    // console.log(choutbasic);
    // console.log(categTotalini1);
    // console.log(categTotalini2);
    // console.log(categTotalini3);

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



