/* global $ */
console.log("js.js");
$('#doRegister').on('click', function(e) {
            e.preventDefault();
            console.log("doR");
            var firstName = $('#registerFirstName').val();
                var lastName = $('#registerLastName').val();
                var email = $('#registerEmail').val();
                console.log(firstName);
                $("#inAsName").html("Logged in as " + firstName + " " + lastName);
                $("#inAsEmail").html("Using email " + email);
});

$('#doLogin').on('click', function(e) {
            e.preventDefault();
            console.log("doL");
            var loggedin = $('#loginEmail').val();
            console.log(loggedin);
            $("#inAsName").text("");
            $("#inAsEmail").html("Logged in using email " + loggedin);
});