var Bike = require("./../js/bike.js").bikeModule;

$(function() {
  var BikeObject = new Bike();

  // $("#search-serial").click(function() {
  //   var serial = $("#serial").val().toString();
  //   $("#serial").val("");
  //
  //   BikeObject.getBikefromSerial(serial);
  // });
  $("#search-brand").click(function() {
    $("#results").empty();
    var brand = $("#brand").val().toString();
    $("#serial").val("");
    BikeObject.getBikefromBrand(brand);
  });
});
