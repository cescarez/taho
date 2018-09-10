$(document).ready(function() {
  $("#dogsitter").click(function(){
    console.log("here are the instructions");
    $("#taho-facts").slideToggle();
  });

  $("#dark-mode").click(function() {
    console.log("activate dark mode")
    $("div").addClass("gray-background");
  });
  $("#light-mode").click(function() {
    console.log("deactivate dark mode")
    $("div").removeClass("gray-background");
  });
});
