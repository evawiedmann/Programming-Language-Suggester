$(document).ready(function() {

  $("form#wordsOptions").submit(function(event){
    event.preventDefault();
    var item = $("#words").val();
    if (item = 1) {
      $("#information").show();
    } else {
      $("#alphabet").show();
    }
  });


  $("form#information").submit(function(event){
    event.preventDefault();
    var item = $("#information").val();
    if (item = 1) {
      $("#animalOptions").show();
    } else {
      $("#colorOptions").show();
    }
});
});
