// back end
var output = [];

function digitMake(input) {
  var take = parseInt($("input#numberInput").val());
  for (let i=0; i <= take; i++) {
    console.log(i);
    if (i >= 501) {
      alert("please, not too high!")
    }
    else if (i.toString().includes("3")) {
      output.push("error!");
    } else if (i.toString().includes("8")) {
      output.push("not computing!");
    } else if (i.toString().includes("5")) {
      output.push("buggy!");
    } else {
      output.push(i);
    }
  }
}

// front end
$(document).ready(function() {
  $("#userInterface").submit(function(event) {
    event.preventDefault();
    var input = $("input#numberInput").val();
    digitMake(input);
    $("#numberOutput").show();
    $("#numberOutput").text(output);
  });

});
