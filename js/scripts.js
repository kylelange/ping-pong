// Business Logic
var pingPongResults = [];
var counter = function(_numberFromUser) {
  // debugger;
  for (i = 1; i <= _numberFromUser; i++) {
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
};
// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    // debugger;
    event.preventDefault();
    pingPongResults = [];
    $("#result").hide().empty();
    var userInput = parseInt($("input#numberInput").val());
    if ((userInput < 0) || (userInput === 0)) {
      alert("Sorry, Fizzbang, zeros and negative numbers don't work 'between the lines' of the court, if you know what I mean. We only keep it POSITIVE around here!  Have another go.");
    } else {
    counter(userInput);
    }
    var liOutput = pingPongResults.forEach(function(_bizInput){
      $("#result").append("<li>" + _bizInput + "</li>")
    });
    $("#result").show();
    console.log(pingPongResults);
  });
});
