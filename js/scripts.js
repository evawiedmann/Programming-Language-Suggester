

$(document).ready(function() {
  $("form#questions").submit(function(event){
    event.preventDefault();
    $("#questions").hide();
    var colorVal = parseInt($("select#color").val());
    var foodVal = parseInt($("select#food").val());
    var sportVal = parseInt($("select#sport").val());
    var animalVal = parseInt($("select#animal").val());
    var weatherVal = parseInt($("select#weather").val());
    var userInputVal = (colorVal+foodVal+sportVal+animalVal+weatherVal);
    if (userInputVal > 10) {
      $("#python").show();
    } else if (userInputVal > 5) {
      $("#java").show();
    } else {
      $("#ruby").show();
    }
  });
});
