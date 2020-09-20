
function objcreate () {

    //Creating card
    var idiv = document.createElement('div');
    idiv.classList.add('indv-city');    
    var par = document.getElementById('apps');
    par.appendChild(idiv);

    //Card city row
    var idiv2 = document.createElement('div');
    idiv2.classList.add('cities');
    idiv.appendChild(idiv2);

    //Card country row
    var idiv3 = document.createElement('div');
    idiv3.classList.add('country');
    idiv.appendChild(idiv3);

    //Card Info Block
    var idiv4 = document.createElement('div');
    idiv4.classList.add('info');
    idiv.appendChild(idiv4);

    //Card city row
    var head1 = document.createElement('h3');
    head1.innerText= 'City :';
    idiv2.appendChild(head1);
    

    //Card city row
    var para1 = document.createElement('p');
    para1.classList.add('citi');
    idiv2.appendChild(para1);

    //Card country row
    var head2 = document.createElement('h3');
    head2.innerText= 'Country :';
    idiv3.appendChild(head2);

    //Card country row
    var para2 = document.createElement('p');
    para2.classList.add('countri');
    idiv3.appendChild(para2);

    //Info Row- 1st- creating inner divs
    var idiv5 =  document.createElement('div');
    idiv5.classList.add('info-row');
    idiv4.appendChild(idiv5);

    var para3 = document.createElement('p');
    para3.innerText = 'Temperature';
    idiv5.appendChild(para3);

    var para4 = document.createElement('p');
    para4.classList.add('edits');
    para4.classList.add('temp');
    idiv5.appendChild(para4);

    //Info Row- 2nd- creating inner divs
    var idiv6 =  document.createElement('div');
    idiv6.classList.add('info-row');
    idiv4.appendChild(idiv6);

    var para5 = document.createElement('p');
    para5.innerText = 'Humidity';
    idiv6.appendChild(para5);

    var para6 = document.createElement('p');
    para6.classList.add('edits');
    para6.classList.add('humi');
    idiv6.appendChild(para6);

    //Info Row- 3rd- creating inner divs
    var idiv7 =  document.createElement('div');
    idiv7.classList.add('info-row');
    idiv4.appendChild(idiv7);

    var para7 = document.createElement('p');
    para7.innerText = 'Feels Like';
    idiv7.appendChild(para7);

    var para8 = document.createElement('p');
    para8.classList.add('edits');
    para8.classList.add('feel');
    idiv7.appendChild(para8);

    //Info Row- 4th- creating inner divs
    var idiv8 =  document.createElement('div');
    idiv8.classList.add('info-row');
    idiv4.appendChild(idiv8);

    var para9 = document.createElement('p');
    para9.innerText = 'Weather';
    idiv8.appendChild(para9);

    var para10 = document.createElement('p');
    para10.classList.add('edits');
    para10.classList.add('weth');
    idiv8.appendChild(para10);

}






$(document).ready(function(){

    $('.pointone').select2({
        width: '100%',
    });

    $('#weather-car .owl-carousel').owlCarousel({
        items: 1,
        // autoplay: true,
        margin: 10,
        loop: true,
        nav: false,
        dots: true
    });
    

    $('#submitt').click(function (e) {

        e.preventDefault();

        //Input tag for city name text capturing
        var city = $('#city').val();
   

        //Select 2 dropdown selected option capturing
        // var city = $('.pointone option:selected').text();
      

        // console.log(city);

        var country = $('#country').val();
        
        objcreate();
        
        // var buton = $('#buton');
        // console.log(buton);
        // var butoncount = buton.value;
        // console.log(butoncount);
      
        // butoncount++;

        // var idno;
        // idno = 1;
        // idno = idno + 1;

        // $('.indv-city').attr('id', 'id' + idno);

        $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=Metric&APPID=eaeddcf19cf77bb3b515062fed6d2a73", function (data) {

            console.log(data);


            $('.citi').empty();
            $('.citi').append(data.name);
            // var target = 'id' + idno + ' ' + '.citi';
            // $(target).append(data.name);

            $('.countri').empty();          
            $('.countri').append(country);

            $('.temp').empty();          
            $('.temp').append(data.main.temp);

            $('.humi').empty();          
            $('.humi').append(data.main.humidity);

            $('.feel').empty();          
            $('.feel').append(data.main.feels_like);

            $('.weth').empty();          
            $('.weth').append(data.weather[0].main);
           

            // $('.temp span').append(Math.ceil(data.main.temp));

            // $('.humi span').append(Math.ceil(data.main.humidity));

            // $('.weth span').append(data.weather[0].main);

           

        });
    });

    
        


    // wetherinfo();

    
  
  

});

// function weatherInfo () {
//     var city = $('#city').val();

//     console.log(city);

//     $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=Metric&APPID=eaeddcf19cf77bb3b515062fed6d2a73", function (data) {

//         console.log(data);


//         $('.temp').append(data.main.temp);

//         $('.humi').append(data.main.humidity);

//         $('.weth').append(data.weather[0].main);

//     });
// }


