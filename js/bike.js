function Bike() {}

// Bike.prototype.getBikefromSerial = function(serial) {
//   $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&serial=" + serial + "&location=Portland%2C%20OR&distance=10&stolenness=proximity", function(response) {
//     console.log(response);
//     // $("#results").text("Your results: " + response.bikes.serial);
//   });
// };

Bike.prototype.getBikefromBrand = function(brand) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=" + brand + "&location=Portland%2C%20OR&distance=100&stolenness=proximity").then(function(response) {
    console.log(response.bikes);
    for (var i = 0; i < response.bikes.length; i++) {
      $("#results").append("<li>" + response.bikes[i].id + "</li>");
    }
  });
};

exports.bikeModule = Bike;
