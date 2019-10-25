$(document).ready(function() {
var age = parseInt(prompt("How old are you?"));
  if (age >= 5) {
    $("#older").show()
  } else {
    $("#younger").show()
  }
});
