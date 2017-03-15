function Bike() {}

// Bike.prototype.getBikefromSerial = function(serial) {
//   $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&serial=" + serial + "&location=Portland%2C%20OR&distance=10&stolenness=proximity", function(response) {
//     console.log(response);
//     // $("#results").text("Your results: " + response.bikes.serial);
//   });
// };

Bike.prototype.getBikefromBrand = function(brand) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=" + brand + "&location=Portland%2C%20OR&distance=100&stolenness=proximity").then(function(response) {
    for (var i = 0; i < response.bikes.length; i++) {
      $("#results").append("<tr>" +
          "<td>" + response.bikes[i].manufacturer_name + "</td>" +
          "<td>" + response.bikes[i].title + "</td>" +
          "<td>" + response.bikes[i].serial + "</td>" +
          "<td>" + response.bikes[i].id + "</td>" +
          "<td>" + response.bikes[i].model + "</td>" +
          "<td>" + response.bikes[i].year + "</td>" +
          "<td><img src='" + response.bikes[i].thumb + "' alt='A stolen " + response.bikes[i].manufacturer_name + "'</td>" +
        "</tr>");
    }
  });
};

exports.bikeModule = Bike;
