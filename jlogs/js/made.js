
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

//Split text Section -- 1


//Replace text Section -- 2
var rephold = document.getElementById("entrtxt2");

var reptxt = document.getElementById("entrgap2");



function arrayDiff() {

  var stringDiffIndx1 = document.getElementById("stringDiffIndx1").value;
  var stringDiffIndx2 = document.getElementById("stringDiffIndx2").value;
  var stringDiffIndxRes = document.getElementById("stringDiffIndxRes");
  

  let strArray1 = stringDiffIndx1.split("");
  let strArray2 = stringDiffIndx2.split("");
  let index = null;

  strArray1.forEach((elem, i) => {
    if (!(elem === strArray2[i])) {
      index = !index ? i : index;
      console.log("elem ", elem);
    }
  });
  console.log("index ", index);
  stringDiffIndxRes.innerText = index;
  
}