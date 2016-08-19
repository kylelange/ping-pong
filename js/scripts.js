// Business Logic
var pingPongResults = [];
var counter = function(_numberFromUser) {
  debugger;
  for (i = 0; i <= _numberFromUser; i++) {
    if (i % 15 === 0) {
      pingPongResults.push("Ping-Pong! Aha! ");
    } else if (i % 5 === 0) {
      pingPongResults.push("Pong! ");
    } else if (i % 3 === 0) {
      pingPongResults.push("Ping! ");
    }
     else {
      pingPongResults.push(i + " ");
    }
  }
};

// User Interface Logic
$(document).ready(function(){
  $("form").submit(function(event){
    debugger;
    event.preventDefault();
    //.toggle + css display:none here?
    var userInput = parseInt($("input#numberInput").val());  //does this need parseInt?
    counter(userInput);
    console.log(pingPongResults);
    $("#result").prepend(pingPongResults);
  });
});
