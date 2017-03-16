var Bike = require("./../js/bike.js").bikeModule;

function displayBikes(city, bikeData, user_date_unix_1, user_date_unix_2) {
  for (var i = 0; i < bikeData.bikes.length; i++) {
    var img_result;
    var date_stolen = moment.unix(bikeData.bikes[i].date_stolen).format("MM/DD/YYYY");
    var location = bikeData.bikes[i].stolen_location.split(",");
    var location_join = location.join(", ");

    $("#results-table").show();

    if (bikeData.bikes[i].thumb === null) {
      img_result = "No image available";
    } else {
      img_result = "<img src='" + bikeData.bikes[i].thumb + "' alt='A stolen " + bikeData.bikes[i].title + "'>";
    }

    if ((user_date_unix_1 <= bikeData.bikes[i].date_stolen) && (user_date_unix_2 >= bikeData.bikes[i].date_stolen)) {
      $("#results").append(
        "<tr>" +
          "<td>" + bikeData.bikes[i].manufacturer_name + "</td>" +
          "<td>" + bikeData.bikes[i].title + "</td>" +
          "<td>" + bikeData.bikes[i].serial + "</td>" +
          "<td>" + bikeData.bikes[i].year + "</td>" +
          "<td>" + location_join + "</td>" +
          "<td>" + date_stolen + "</td>" +
          "<td>" + img_result + "</td>" +
        "</tr>"
      );
    }
  }
}

$(function() {
  var BikeObject = new Bike();

  $("#search-brand").click(function() {
    $("#results").empty();

    var brand = $("#brand").val().toString();
    var city = $("#city").val().toString();
    var user_date_1 = $("#date-stolen-1").val();
    var user_date_2 = $("#date-stolen-2").val();
    var user_date_unix_1 = (new Date(user_date_1).getTime() / 1000).toFixed(0);
    var user_date_unix_2 = (new Date(user_date_2).getTime() / 1000).toFixed(0);

    BikeObject.getBikes(brand, city, user_date_unix_1, user_date_unix_2, displayBikes);
  });
});
