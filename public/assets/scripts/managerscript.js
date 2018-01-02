/* global $ firebase */
//Document ready function
$(document).ready(function() {
   console.log("managerscript connected!"); 
$(function() {

    //Initialize Firebase
    var config = {
        apiKey: "AIzaSyBesSsFKonmTIoilfGXHdEH4YWypLcVl-s",
        authDomain: "airbnbit-7fc6f.firebaseapp.com",
        databaseURL: "https://airbnbit-7fc6f.firebaseio.com",
        projectId: "airbnbit-7fc6f",
        storageBucket: "airbnbit-7fc6f.appspot.com",
        messagingSenderId: "1080933064947"
    };

    firebase.initializeApp(config);
    console.log("Manager");
     $("#lookupButton").on("click", function(event) {
        event.preventDefault();
        console.log("Submit");
        // Save value in variable.
        var user = firebase.auth().currentUser;
            if (user) {
              // User is signed in.
              console.log(user);
              console.log(user.email);
              $("#user").html(user.email);
            } else {
              // No user is signed in.
              console.log("No user signed in.");
            }
                
    }); // End of .on(click)
});

console.log("M2");
 $("#lookupListings").on("click", function(event) {
        event.preventDefault();
        console.log("Listings");
        $.get("/api/homeListings", function(req,res) {
        allListings;
        console.log(allListings[0]);
        });
    
 });
});