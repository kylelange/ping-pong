// Business Logic
var pingPongResults = [];
//for loop here w medulos = if else statements

// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    // debugger;
    event.preventDefault();
    //.toggle + css display:none here?
    var userInput = parseInt($("input#numberInput").val());  //does this need parseInt?
    console.log(userInput);
    //run the function
    $("#result").append(userInput);
    // var finalResults = pingPongResults.join("");
    // $("#result").append(finalResults);
  });
});
