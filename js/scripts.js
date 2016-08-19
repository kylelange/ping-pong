// Business Logic
//will need a global Array = []; below
var pingPongResults = [];
//for loop here w medulos = if else statements

// User Interface Logic
$(document).ready(function(){
  $("form").submit(fuction(){
    event.prefentDefault();
    //.toggle + css display:none here?
    var userInput = $(#numberInput).val();  //does this need parseInt?
    //run the function
    var finalResults = pingPongResults.join("");
    $("#result").append(finalResults);
  });
});
