
$(document).ready(function(){

  
  

});

$(document).ready(function() {
  /* API: https://data.gov.in/resources/real-time-air-quality-index-Delhi-location */
    $.get( "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001db984e68ef134d2740769e17c1894d1b&format=json&offset=0&limit=10000", function( data ) {
        // $.get( "https://api.data.gov.in/resource/3b01bcb8-0b14-4abf-b6f2-c1bfd384ba69?api-key=579b464db66ec23bdd000001db984e68ef134d2740769e17c1894d1b&format=json&offset=0&limit=1000&filters[state]=West_Bengal",function( data ) {
        if(data.status==="ok") {
          $("#api-title").append(data.title);
          $("#lastUpdated").append('Last Updated On ' + data.updated_date);
          /* looping through the values and appending them to the table */
          $.each(data.records, function(i, item) {
              $('#air-quality-table > tbody:last-child').append('<tr><td>'+ data.records[i].id+'</td><td>'+ data.records[i].city+'</td><td>'+ data.records[i].station+'</td><td>'+ data.records[i].pollutant_id+'</td><td>'+ data.records[i].pollutant_min+'</td><td>'+ data.records[i].pollutant_max+'</td><td>'+ data.records[i].pollutant_avg+'</td></tr>');
          });
        }

        /*Initializing Datatables*/
        $('#air-quality-table').DataTable();
    }, "json" );

    $("#air-quality-table").on("draw.dt", function () {
        $(this).find(".dataTables_empty").parents('tbody').empty();
    });

      
  });
  /* Hiding No data text on data tables since data is append in jquery on DOM */

