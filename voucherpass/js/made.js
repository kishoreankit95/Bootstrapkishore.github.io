
$(document).ready(function(){

  let inps = $(".phoneNo").val();

  let getGift = $(".getGift");


  console.log(inps.length);

  $(".phoneNo").on("change", checkMobile);


  function checkMobile () {
    
    let inps0 = parseInt(inps.charAt(0));
    console.log(inps0);

    const arr = [9,8,7,6];
    console.log(arr.includes(parseInt(inps0)));
    if(inps.length != 10){
      alert("Please check your number");
    }
    else 
    if(!arr.includes(inps0)){
      alert("Please enter correct number");
      console.log("in");
    }
    else{
      getGift.addClass("active");
    }

  }

  $(getGift).on("click", storeMobile);

  function storeMobile() {
    localStorage.setItem("mobNo", inps);
    // localStorage.removeItem("mobNo");
    console.log(localStorage.getItem("mobNo"));
  }




});



