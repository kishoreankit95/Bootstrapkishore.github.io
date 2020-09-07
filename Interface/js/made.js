function getvuwel() {
  var getvalue = document.getElementById('inp-name').value;
  // console.log(getvalue);

  // var str = "javascriptloops";
  var strlen = getvalue.length;
  console.log(strlen); 

  var i;
  var j;
  // console.log("vowels");
  for (i=0; i<strlen; i++) {
    var identify = getvalue.charAt(i);
    if (identify == "a" || identify == "A" || identify == "e" || identify == "E" || identify == "i" || identify == "I" || identify == "o" || identify == "O" || identify == "u" || identify == "U" ) {
      var newpet = document.createElement('p');
      newpet.innerHTML = identify;
      // console.log(newpet);
      var vowel = document.getElementById('vowels');
      vowel.appendChild(newpet);
    }
    else{
      var newold = document.createElement('p');
      newold.innerHTML = identify;
      var consonant = document.getElementById('consonant');
      consonant.appendChild(newold);
    }
  }
  // console.log("consonants");
  // for (i=0; i<strlen; i++) {
  //     var identifye = getvalue.charAt(i);
  
  //     if( !(identifye == "a" || identifye == "A" || identifye == "e" || identifye == "E" || identifye == "i" || identifye == "I" || identifye == "o" || identifye == "O" || identifye == "u" || identifye == "U" )) {
  //         // console.log(identifye);
  //         var newpet = document.createElement('p');
  //         newpet.innerHTML = identifye;
  //         // console.log(newpet);
  //         var consonant = document.getElementById('consonant');
  //         consonant.appendChild(newpet);
  //     }
  // }
}



// function vowelsfind(a) {
//   var show = document.getElementById("result");

//   var strng = a;
//   var strnlen = strng.length;
//   // console.log(strnlen);

//   var i;
  
//   for (i=0; i < strnlen - 1; i++) {
//     var x = strng.charAt(i);

//     if (x=="a" || x == "e" || x == "i" || x== "o" || x =="u"){
//       console.log(x);
//     }
//   }


// }

// vowelsfind("ankito");


// Currying Example

// let multiply = function (a, b) {
//   console.log(a*b);
// }

// let  multiplyByTwo = multiply.bind(this, 2);
// multiplyByTwo(10);

// let  multiplyByThree = multiply.bind(this, 3);
// multiplyByThree(10);

// Currying Example

