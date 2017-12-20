//Document ready function
$(function() {
    console.log("script connected!");

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

    var database = firebase.database();



    $("#Lsubmit").on("click", function(event) {

        event.preventDefault();
        if ($("#email").val() === "" || $("#password").val() === "") {
            alert("Please enter Name and correct Password to Continue.");
            return false;
        }

        var email = $("#email").val().trim();
        console.log("email: " + email);
        var password = $("#password").val().trim();
        console.log("password: " + password);

        // database.ref().push({
        //     email: email,
        //     password: password,
        // });

        // var form = document.getElementById()
    });

    $("#Rsubmit").on("click", function(event) {

        event.preventDefault();
        if ($("#Email").val() === "" || $("#Password").val() === "") {
            alert("Please fill out all the fields correctly.");
            return false;
        }
        console.log("hello");

        var Email = $("#Email").val().trim();
        console.log("Email: " + Email);

        var Password = $("#Password").val().trim();
        console.log("Password: " + Password);

        // database.ref().push({
        //     fullName: fullName,
        //     Email: Email,
        //     Password: Password
        // });
    });

    function register() {
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        //firebase auth
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            //
        })
    }



});
