/* global $*/
$(document).ready(function() {
 console.log("js");
<<<<<<< HEAD
 $.GET("/")
 

=======
 
 $("#loginGuest").on("click", function(event) {
  event.preventDefault();
    window.location.href = 'guestData.html';
 });
 
  $("#loginGuest").on("click", function(event) {
  event.preventDefault();
    window.location.href = 'hostData.html';
 });
>>>>>>> 1859f277be562402aa18ea2ca76d1a22fddf35cf
    
}); // End of document ready.

 // $("#loginGuest").on("click", function(event) {
 //  event.preventDefault();
 //    window.location.href = 'guestData.html';
 // });
 
 //  $("#loginGuest").on("click", function(event) {
 //  event.preventDefault();
 //    window.location.href = 'hostData.html';
 // });