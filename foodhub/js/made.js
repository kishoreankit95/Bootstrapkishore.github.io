
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

  var button;

  $(".btn-addv").on("click", incvalu);

  function incvalu () {
    var capinp = $(this).siblings(".btn-totv");
    var capini = capinp.val();
    var incval = ++capini;
    capinp.val(incval);
    // console.log(capini); 
  }

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


  // Home page Tab input button
  $("#home .btn-totv").on("change", addfooditem);

  var target1 = $("#drinks");

  function addfooditem () {
    var inpval = $(this).val();

    var itmname = $(this).parent().siblings("h4").text();
    var itmuprice = $(this).parent().siblings("p").children(".unit-pric").text();

    var totcost = itmuprice*inpval;
    var totcostPre = totcost.toPrecision(3);
    var netprice = parseFloat(totcostPre);
    
    var categTotalini = $("#drinks .categ-total").text();

    if (inpval > 0) {
      const adddiv = document.createElement("div");

      adddiv.className = "sep-items";

      adddiv.innerHTML = `
      <p class="fd__name">` + itmname + `</p>
      <p class="fd__brkup">` + "$" + itmuprice + ` x ` + inpval + `</p>
      <p class="fd__tot">`+ "$" + netprice + `</p> `;

      target1.append(adddiv);

      // categTotal.text(netprice);
      
    }

    var categTotalNum = parseFloat(categTotalini);
    var categTotal = categTotalNum + netprice;

    $("#drinks .categ-total").text(categTotal);

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



