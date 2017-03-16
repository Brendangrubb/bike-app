var mapApiKey = require('./../.env').apiModule;
var geocodeApiKey = require('./../.env').geocodeApiModule;

function Bike() {}

Bike.prototype.getLatLong = function(city, displayLatLong) {
  $.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "&key=" + geocodeApiKey).then(function(responseJSON) {
    displayLatLong(city, [responseJSON.results[0].geometry.location.lat, responseJSON.results[0].geometry.location.lat]);
  });
};

// var latlong = [];
// var lat = responseJSON.results[0].geometry.location.lat;
// var long = responseJSON.results[0].geometry.location.lng;
// latlong.push(lat, long);
// return latlong;
Bike.prototype.getBikes = function(brand, city, user_date_unix_1, user_date_unix_2) {
  //GET REQUEST FOR BIKE SEARCH
  $.get("https://bikeindex.org:443/api/v3/search?page=1&per_page=30&manufacturer=" + brand + "&location=" + city + "%2C%20OR&distance=100&stolenness=proximity").then(function(response) {
  // BIKE SEARCH CODE
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

    //GET REQUEST FOR MAP
    // function mapThing() {
    //   $.get("https://maps.googleapis.com/maps/api/js?key=" + mapApiKey + "&callback=initMap").then(function() {
    //     console.log("beforeinitMap");
    //     function initMap() {
    //       var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 3,
    //         //come back and fix map center with GM location api
    //         center: { lat: 45.5423508, lng: -122.7945023 }
    //       });
    //       console.log("initMap ran");
    //
    //       var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    //
    //       var markers = locations.map(function(location, i) {
    //         return new google.maps.Marker({
    //           position: location,
    //           label: labels[i % labels.length]
    //         });
    //       });
    //       console.log(markers);
    //       var markerCluster = new MarkerCluster(map, markers, {
    //         imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    //       });
    //     }
    //     var locations = [
    //       {lat: 25.7703765, lng: -80.2193462},
    //       {lat: 25.7817743, lng: -80.2065818}
    //     ];
    //
    //   });
    // }
    // mapThing();
    // async defer src =("https://maps.googleapis.com/maps/api/js?key=" + mapApiKey + "&callback=initMap");



  //END BIKE GET REQUEST
  });

};

exports.bikeModule = Bike;
