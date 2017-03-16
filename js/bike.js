var mapApiKey = require('./../.env').apiModule;

function Bike() {}

Bike.prototype.getBikes = function(brand, city, user_date_unix_1, user_date_unix_2, displayBikes)
{
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=30&manufacturer=" + brand + "&location=" + city + "%2C%20OR&distance=100&stolenness=proximity").then(function(response)
  {
    displayBikes(city, response, user_date_unix_1, user_date_unix_2);
  });
};

exports.bikeModule = Bike;
