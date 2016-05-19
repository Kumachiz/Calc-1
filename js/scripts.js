$(function (){
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $("#initially-hidden").fadeToggle();
    $("#initially-showing").toggle();
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("#calculator").click(function() {
    var add = function(number1, number2) {
      return number1 + number2;
    };

    var number1 = parseInt(prompt("Enter a number:"));
    var number2 = parseInt(prompt("Enter another number:"));
    var result = add(number1, number2);
    alert(result);
  });
});
