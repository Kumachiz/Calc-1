$(function (){
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
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
