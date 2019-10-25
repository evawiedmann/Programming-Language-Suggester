$(document).ready(function() {

  $("form#wordsOptions").submit(function(event){
    event.preventDefault();
    var item = $("#words").val();
    if (item = 1) {
      $("#basics").show();
    } else {
      $("#alphabet").show();
    }
  });

  $("form#colorOptions").submit(function(event){
    event.preventDefault();
    var item = $("#color").val();
    if (item = 1) {
      $("#jewel").show();
    } else {
      $("#earth").show();
    }
  });


  $("form#basics").submit(function(event){
    event.preventDefault();
    var item = $("#basics").val();
    if (item = 1) {
      $("#animalOptions").show();
    } else {
      $("#colorOptions").show();
    }
});
});
