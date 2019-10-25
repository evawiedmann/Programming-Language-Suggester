$(document).ready(function() {
  $("form#selection1").submit(function(event) {
    var wordsIn = $("select#selection1").val();
var result;
if (wordsIn === "Words"){
  result = show.("#selection21");
} else {
  result = show.(q22)
}
    $("#quote").show();

    event.preventDefault();
  });
});
