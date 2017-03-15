function Bike() {}

// Bike.prototype.getBikefromSerial = function(serial) {
//   $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&serial=" + serial + "&location=Portland%2C%20OR&distance=10&stolenness=proximity", function(response) {
//     console.log(response);
//     // $("#results").text("Your results: " + response.bikes.serial);
//   });
// };

Bike.prototype.getBikefromBrand = function(brand) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=" + brand + "&location=Portland%2C%20OR&distance=100&stolenness=proximity").then(function(response) {
    $(".result-header").text("List of stolen " + brand + " bikes:");
    for (var i = 0; i < response.bikes.length; i++) {
      $("#results").append("<li>" + response.bikes[i].id + "</li>" +
      "<ul>" +
        "<li>" + "<img src='" + response.bikes[i].thumb + "' alt= 'stolen " + response.bikes[i].title + "'>" + "</li>" +
        "<li>" + response.bikes[i].title + "</li>" +
        "<li>" + response.bikes[i].serial + "</li>" +
        "<li>" + response.bikes[i].frame_model + "</li>" +
        "<li>" + response.bikes[i].year + "</li>" +
      "</ul>");
    }
  });
};

exports.bikeModule = Bike;
