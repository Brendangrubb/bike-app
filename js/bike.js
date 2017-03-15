function Bike() {}

Bike.prototype.getBikefromBrand = function(brand) {
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=25&manufacturer=" + brand + "&location=Portland%2C%20OR&distance=100&stolenness=proximity").then(function(response) {
    for (var i = 0; i < response.bikes.length; i++) {
      $("#results-table").show();

      var img_result;

      if (response.bikes[i].thumb === null) {
        img_result = "No image available"
      } else {
        img_result = "<img src='" + response.bikes[i].thumb + "' alt='A stolen " + response.bikes[i].title + "'>";
      }

      $("#results").append(
        "<tr>" +
          "<td>" + response.bikes[i].manufacturer_name + "</td>" +
          "<td>" + response.bikes[i].title + "</td>" +
          "<td>" + response.bikes[i].serial + "</td>" +
          "<td>" + response.bikes[i].id + "</td>" +
          "<td>" + response.bikes[i].year + "</td>" +
          "<td>" + img_result + "</td>" +
        "</tr>"
      );
    }
  });
};

exports.bikeModule = Bike;
