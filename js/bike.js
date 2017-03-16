var mapApiKey = require('./../.env').apiModule;

function Bike() {
}

Bike.prototype.getBikes = function(brand, city, user_date_unix_1, user_date_unix_2, displayBikes, page)
{
  var url = $.get("https://bikeindex.org:443/api/v3/search?page=" + page + "&per_page=5&manufacturer=" + brand + "&location=" + city + "%2C%20OR&distance=100&stolenness=proximity");

  url.then(function(response)
  {
    displayBikes(city, response, user_date_unix_1, user_date_unix_2);
    console.log(response.bikes[0].id);

    if (response.bikes[0].id === null ) {
      alert("We gotta no bikes");
    }

  });
};

exports.bikeModule = Bike;
