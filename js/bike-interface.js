var Bike = require("./../js/bike.js").bikeModule;

$(function() {
  var BikeObject = new Bike();

  $("#search-brand").click(function() {
    $("#results").empty();
    var brand = $("#brand").val().toString();
    var city = $("#city").val().toString();
    var date_stolen = $("#date-stolen").val();
    console.log(date_stolen);
    var date_stolen_unix = (new Date(date_stolen).getTime() / 1000).toFixed(0);
    console.log(date_stolen_unix);
    BikeObject.getBikes(brand, city, date_stolen_unix);
  });
});

$(document).ready(function(){
  setInterval(function() { $('#time').text(moment().format("X")); } , 1000);
});
