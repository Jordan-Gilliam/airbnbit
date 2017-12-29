/* global $*/
$(document).ready(function() {
 console.log("js");
 // Get the listing data from the form on host.html
 $("#hostBtn").on("click", function(event) {
  event.preventDefault();

  // Save the data - name and email will come from user id.
  var phone = $("#phone").val().trim();
  var streetAddr = $("#streetAddr").val().trim();
  var city = $("#city").val().trim();
  var state = $("#state").val().trim();
  var zipcode = $("zipcode").val().trim();
  var photo1 = $("#photo1");
  var photo2 = $("#photo2");
  var photo3 = $("#photo3");

  // Make an AJAX get request to our api, including the user's book in the url
  $.get("/api/" + bookSearched, function(data) {

    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);

  });

});
    
}); // End of document ready.
