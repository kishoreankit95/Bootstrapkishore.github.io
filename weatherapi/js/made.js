
$(document).ready(function(){

    $('#submitt').click(function (e) {

        e.preventDefault();

        var city = $('#city').val();

        console.log(city);

        var country = $('#country').val();

        

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=Metric&APPID=eaeddcf19cf77bb3b515062fed6d2a73", function (data) {

            console.log(data);

            $('#apps span').empty();
          
            
           

            $('.temp span').append(Math.ceil(data.main.temp));

            $('.humi span').append(Math.ceil(data.main.humidity));

            $('.weth span').append(data.weather[0].main);

           

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


