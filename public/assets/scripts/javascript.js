/* global $*/
$(document).ready(function() {
    console.log("js");

// Capture the user's information on register
var regFirstName;
var regLastName;
var regEmail;
var regFullName;
$('#doRegister').on('click', function(e) {
        e.preventDefault();
        regFirstName = $('#registerFirstName').val();
        regLastName = $('#registerLastName').val();
        regEmail = $('#registerEmail').val();
        regFullName = regFirstName + " " + regLastName;
        console.log(regFullName);
});

// Capture the user's email on log in to get their ID
var loggedin;
$('#doLogin').on('click', function(e) {
        e.preventDefault();
        loggedin = $('#loginEmail').val();
        console.log(loggedin);
        // Get user ID based on email
        $.get("?api/users", function(loggedin,res) {
            db.User.findAll({
                where: {
                    "email": loggedin
                }
            }).then(function() {
                res.JSON(res);
                console.log(res);
                // Need to get the ID out to use other places NEED TO DO
            })
        })
});
 
//To POST a listing_________________________________________POST listing______
// Get the listing data from the form on host.html
var name;
var email;
var phone;
var streetAddr;
var city;
var state;
var taxId;
var zipcode;
var photo1;
var photo2;
var photo3;

     $("#hostBtn").on("click", function(event) {
      event.preventDefault();
      // Save the data
      name = regFullName;
      email = loggedin;
      phone = $("#phone").val().trim();
      streetAddr = $("#streetAddr").val().trim();
      city = $("#city").val().trim();
      state = $("#state").val().trim();
      zipcode = $("zipcode").val().trim();
      photo1 = $("#photo1");
      photo2 = $("#photo2");
      photo3 = $("#photo3");
    });
// Provide a way to post this after approval
function listIt() {
var HomeListing = {
    // need user id
    "listName": name,
    "listEmail": email,
    "listAddress": streetAddr,
    "listCity": city,
    "listState": state,
    "listZip": zipcode,
    "listPhone": phone,
    "listTax": taxId,
    "listPhoto1": photo1,
    "listPhoto2": photo2,
    "listPhoto3": photo3
    };
     $.post("/api/homeListings", function(req,res) {
        HomeListing;
        });
}


// To handle a reservation request___________________Reservation Request______

// Function to use if there is booking availability
function bookItDano() {
    var Booking = {
      "listId": reqListId,
      "arriveDAte": reqArriveDate,
      "leaveDate": reqLeaveDate
    };
     $.post("/api/bookings", function(req,res) {
        Booking;
        });
    alert("Success! Your requested dates are available.");
}

// To check a requested booking against the current bookings
var listId;
var arriveDate;
var leaveDate;
function checkBookings() {
    // Need forEach to loop through returned results NEED TO COMPLETE
    
    // if there are no bookings - done
    if (!listId) {
        bookItDano();
    } else {
    if (reqArriveDate > leaveDate || reqLeaveDate < arriveDate) {
        bookItDano();
    } else {
        alert("Dates not available, please try another listing or another time.");
    } // End of else that gives alert   
    } // End of else containing second if-else
} // End of checkBookings

// Get the requested booking data from the form on guest.html
var reqListId;
var reqArriveDate;
var reqLeaveDate;

     $("#guestBtn").on("click", function(event) {
      event.preventDefault();
      // Save the data - name and email come from user id found by email.
      reqListId = $("#listId").val().trim();
      reqArriveDate = $("#arriveDate");
      reqLeaveDate = $("#leaveDate");
      checkBookings();
});

    
}); // End of document ready.
