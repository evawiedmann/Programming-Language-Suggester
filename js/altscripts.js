$(document).ready(function() {
  $("form#information").submit(function(event){
    event.preventDefault();
    var item = $("#information").val();
    if (item = 1) {
      $("#lucky").show();
    } else {
      $("#colorOptions").show();
    }
});
});
