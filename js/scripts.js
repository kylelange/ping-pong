// Business Logic

var counter = function(numberFromUser) {
  var pingPongResults = [];
  for (i = 1; i <= numberFromUser; i++) {
    if (i % 15 === 0) {
      pingPongResults.push("Ping-Pong! Aha! ");
    } else if (i % 5 === 0) {
      pingPongResults.push("Pong! ");
    } else if (i % 3 === 0) {
      pingPongResults.push("Ping! ");
    } else {
      pingPongResults.push(i);
    }
  }
  return pingPongResults;
};
// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("#result").empty().hide();
    var pingPongResults = [];
    var userInput = parseInt($("input#numberInput").val());
    if ((userInput < 0) || (userInput === 0)) {
      alert("Sorry, Fizzbang, zeros and negative numbers don't work 'between the lines' of the court, if you know what I mean. We only keep it POSITIVE around here!  Have another go.");
    } else {
    var resultsArray = counter(userInput);
    }
    var liOutput = resultsArray.forEach(function(bizInput){
      $("#result").append("<li>" + bizInput + "</li>")
    });
    $("#result").show();
  });
});
