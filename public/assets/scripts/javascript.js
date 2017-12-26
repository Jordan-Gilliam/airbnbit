/* global $*/
$(document).ready(function() {
 console.log("js");
 
 $("#loginGuest").on("click", function(event) {
  event.preventDefault();
    window.location.href = 'guestData.html';
 });
 
  $("#loginGuest").on("click", function(event) {
  event.preventDefault();
    window.location.href = 'hostData.html';
 });
    
}); // End of document ready.