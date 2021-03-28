
$(document).ready(function(){

  let inps = $(".phoneNo").val();
  console.log(inps);
  console.log(inps.length);

  $(".getGift").on("click", checkMobile)


  function checkMobile () {
    let inps = $(".phoneNo").val();
    console.log("mobile");
  }




});



