// Business Logic
var pingPongResults = [];
var counter = function(_numberFromUser) {
  debugger;
  for (i = 0; i <= _numberFromUser; i++) {
    if (i % 15 === 0) {
      pingPongResults.push("Ping-Pong! Aha! ");
    }
    // else if () {
    //
    // } else if () {
    //
    // }
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
    // $("#result").prepend(userInput);  -step 1 output.
    // var finalResults = pingPongResults();
    console.log(pingPongResults);
    $("#result").prepend(pingPongResults);
  });
});
