var Bike = require("./../js/bike.js").bikeModule;

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
    BikeObject.getBikes(brand, city, user_date_unix_1, user_date_unix_2);
  });
});

$(document).ready(function(){
  setInterval(function() { $('#time').text(moment().format("X")); } , 1000);
});
