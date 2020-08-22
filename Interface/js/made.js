// const menu = document.querySelector('.menu');
// const option = document.querySelector('.menu span')

// menu.addEventListener('click', e => {
//   if (e.target.classList.contains('menu') || e.target.classList.contains('select') || e.target.classList.contains('menu__icon')) {
//       menu.classList.toggle('menu__active');
//   }

//   if (e.target.classList.contains('menu__dropdown-option')) {
//       option.innerHTML = e.target.textContent;
//       menu.classList.remove('menu__active');
//   }
// })



function vowelsfind(a) {
  var show = document.getElementById("result");

  var strng = a;
  var strnlen = strng.length;
  console.log(strnlen);

  var i;
  // i=0;
  

  for (i=0; i < strnlen - 1; i++) {
    var x = strng.charAt(i);

    if (x=="a" || x == "e" || x == "i" || x== "o" || x =="u"){
      console.log(x);
    }
  }


}

vowelsfind("Ankito");