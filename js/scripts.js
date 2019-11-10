// back end



// front end
$(document).ready(function() {
  $("input#numberInput").submit(function(event) {
    event.preventDefault();
    var input = $("input#numberInput").val();
    conversion(input);
    $("#numberOutput").text(outputFinal);
  });

});
