var mapApiKey = require('./../.env').apiModule;

function Bike() {}

Bike.prototype.getBikes = function(brand, city, user_date_unix_1, user_date_unix_2) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=30&manufacturer=" + brand + "&location=" + city + "%2C%20OR&distance=100&stolenness=proximity").then(function(response) {
    for (var i = 0; i < response.bikes.length; i++) {
      $("#results-table").show();

      var img_result;

      if (response.bikes[i].thumb === null) {
        img_result = "No image available";
      } else {
        img_result = "<img src='" + response.bikes[i].thumb + "' alt='A stolen " + response.bikes[i].title + "'>";
      }

      var date_stolen = moment.unix(response.bikes[i].date_stolen).format("MM/DD/YYYY");
      var location = response.bikes[i].stolen_location.split(",");
      var location_join = location.join(", ");

      if ((user_date_unix_1 <= response.bikes[i].date_stolen) && (user_date_unix_2 >= response.bikes[i].date_stolen)) {
        $("#results").append(
          "<tr>" +
            "<td>" + response.bikes[i].manufacturer_name + "</td>" +
            "<td>" + response.bikes[i].title + "</td>" +
            "<td>" + response.bikes[i].serial + "</td>" +
            "<td>" + response.bikes[i].year + "</td>" +
            "<td>" + location_join + "</td>" +
            "<td>" + date_stolen + "</td>" +
            "<td>" + img_result + "</td>" +
          "</tr>"
        );
      }
    }
  });
};
exports.bikeModule = Bike;
