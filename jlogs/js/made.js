
//Split text Section -- 1
var entrtxt = document.getElementById("entrtxt");

var entrgap = document.getElementById("entrgap");

var splittext = document.getElementsByClassName("split__text");

// console.log(entrgap);
// console.log(splittext);

function entrtxtCopy () {
  var splittxtval = entrtxt.value;
  var splittxtat = entrgap.value;

  // console.log("Hi");

  var result = splittxtval.split(splittxtat);

  for (var i=0; i<splittext.length; i++) {
    splittext[i].innerHTML = result;
  }
  
}
