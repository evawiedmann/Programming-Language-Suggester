$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));
  if (age >= 5) {
    var love = prompt("Do you already love programming?")
    if (love = yes) {
      $("#lucky").show();
    } else {
      var colorletter = prompt("Do you prefer colors or letters?")
      if (colorletter = "colors"){
        var morecolors = prompt("Do you prefer jewel tones or earth tones?")
        if (morecolors = earth tones) {
          $("#rust").show();
        } else {
          $("#ruby").show();
        }
      } else {
        var letter = prompt("Do you like the first or second half of the alphabet more?")
        if (letter == a ||  letter == b || letter == c || letter == d || letter == e || letter == f || letter == g || letter == h || letter == i || letter == j || letter == k || letter == l || letter == m)
        var student = prompt("Where you a good student in grade school?")
        if (student = yes) {
          $("#aplus").show();
        } else {
          var coffee = prompt("Do you need some coffee?")
          if (coffee = yes) {
            $("#java").show();
          } else {
            var animal = prompt("Do you prefer birds or reptiles?")
            if (animal = birds) {
              $("#swift").show();
            }
          }
        }
      }
    }
  } else {

    $("#young").show();
  }
});
