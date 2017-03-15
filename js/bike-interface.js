var Bike = require("./../js/bike.js").bikeModule;

$(function() {
  var BikeObject = new Bike();

  $("#search-brand").click(function() {
    $("#results").empty();
    var brand = $("#brand").val().toString();
    $("#serial").val("");
    BikeObject.getBikefromBrand(brand);
  });
});
