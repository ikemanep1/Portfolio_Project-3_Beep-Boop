// back end
function conversion(input) {
  var take = parseInt($("input#numberInput").val());
  for (let i=0; i <= take; i++) {
    console.log(i)
  }
}


// front end
$(document).ready(function() {
  $("#userInterface").submit(function(event) {
    event.preventDefault();
    var input = $("input#numberInput").val();
    conversion(input);
    $("#numberOutput").text(outputFinal);
  });

});
