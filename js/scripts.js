// back end
var output = [];

function conversion(input) {
  var take = parseInt($("input#numberInput").val());
  for (let i=0; i <= take; i++) {
    output.push(i);
    console.log(i)
    console.log(i)
    // if (take.i.includes(3)) {
    //   output.push("error!");
    // } else if (take.i.includes(2)) {
    //   output.push("boop!");
    // } else if (take.i.includes(1)) {
    //   output.push("beep!");
    // } else (i.includes(i))
    //   output.push(i);
    }
  }



// front end
$(document).ready(function() {
  $("#userInterface").submit(function(event) {
    event.preventDefault();
    var input = $("input#numberInput").val();
    conversion(input);
    $(".results").show();
    $("#numberOutput").text(output);
  });

});
