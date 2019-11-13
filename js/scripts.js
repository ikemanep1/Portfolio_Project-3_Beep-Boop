// back end
function digitMake(input) {
  var output = [];
  var take = parseInt($("input#numberInput").val());
  for (let i=0; i <= take; i++) {
    if (i >= 101) {
      alert("please, not too high!")
    }
    else if (i.toString().includes("3")) {
      output.push("I'm sorry Dave, I cannot do that...");
    } else if (i.toString().includes("2")) {
      output.push("BOOP!");
    } else if (i.toString().includes("1")) {
      output.push("BEEP!");
    } else {
      output.push(i);
    }
  }
  return output
}

// front end
$(document).ready(function() {
  $("#userInterface").submit(function(event) {
    event.preventDefault();
    var input = $("input#numberInput").val();
    var returnSeries = digitMake(input);
    $("#numberOutput").show();
    $("#numberOutput").text(returnSeries);
  });
});
