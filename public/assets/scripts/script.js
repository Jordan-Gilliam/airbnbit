/* global $ firebase */
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

    //create firebase references
    auth = null;

    //Register
    $('#doRegister').on('click', function(e) {
        e.preventDefault();
        console.log("R");
        $('#registerModal').modal('hide');
        $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
        $('#messageModal').modal('show');
        var data = {
            email: $('#registerEmail').val(), //get the email from Form
            firstName: $('#registerFirstName').val(), // get firstName
            lastName: $('#registerLastName').val(), // get lastName
        };
        console.log(data);
        var passwords = {
            password: $('#registerPassword').val(), //get the pass from Form
            cPassword: $('#registerConfirmPassword').val(), //get the confirmPass from Form
<<<<<<< HEAD
        }
        if (data.email != '' && passwords.password != '' && passwords.cPassword != '') {
            if (passwords.password == passwords.cPassword) {

                // Add the user to the users table in our listings_db
                // var newUser = {
                //     firstName: $('#registerFirstName').val().trim,
                //     lastName: $('#registerLastName').val().trim,
                //     email: $('#registerEmail').val().trim
                // }

=======
        };
        // Get the data for the users table in our listings db
        var firstName = $('#registerFirstName').val();
        var lastName = $('#registerLastName').val();
        var email = $('#registerEmail').val();
        console.log(firstName);
        if (data.email != '' && passwords.password != '' && passwords.cPassword != '') {
            console.log("check");
            // Check that the passwords match
            if (passwords.password == passwords.cPassword) {
<<<<<<< HEAD
                
>>>>>>> 87df2e4dc9999f130e37893399caa53195f2aa96
=======
                console.log("match");
>>>>>>> 990c1b76aea05275368146222c326e5580d86191
                //create the user
                firebase.auth()
                    .createUserWithEmailAndPassword(data.email, passwords.password)
                    .then(function(user) {
                        //now user is needed to be logged in to save data
                        console.log("Authenticated successfully with payload:", user);
                        auth = user;
                        //now saving the profile data
                        // usersRef
                        //     .child(user.uid)
                        //     .set(data)
                        //     .then(function() {
                        //         console.log("User Information Saved:", user.uid);
                        //     })
                        $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
                        //hide the modal automatically
                        setTimeout(function() {
                            $('#messageModal').modal('hide');
                            $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
                            // contactsRef.child(auth.uid)
                            //     .on("child_added", function(snap) {
                            //         console.log("added", snap.key(), snap.val());
                            //         $('#contacts').append(contactHtmlFromObject(snap.val()));
                            //     });
                        }, 3000);
                         // Insert into html
                        console.log(lastName);
                        $("#inAsName").html(firstName + " " + lastName);
                        $("#inAsEmail").html(email);
                        console.log("Successfully created user account with uid:", user.uid);
                        $('#messageModalLabel').html(spanText('Successfully created user account!', ['success']))
                        window.location.assign("/loggedin.html");
                    })
                    .catch(function(error) {
                        console.log("Error creating user:", error);
                        $('#messageModalLabel').html(spanText('ERROR: ' + error.code, ['danger']))
                    });
            }
            else {
                //password and confirm password didn't match
                $('#messageModalLabel').html(spanText("ERROR: Passwords didn't match", ['danger']))
            }
        }
    });

    //Login
    $('#doLogin').on('click', function(e) {
        e.preventDefault();
        $('#loginModal').modal('hide');
        $('#messageModalLabel').html(spanText('<i class="fa fa-cog fa-spin"></i>', ['center', 'info']));
        $('#messageModal').modal('show');

        if ($('#loginEmail').val() != '' && $('#loginPassword').val() != '') {
            //login the user
            var data = {
                email: $('#loginEmail').val(),
                password: $('#loginPassword').val()
            };
            var loggedin = $('#loginEmail').val();
            console.log(data);
            
            firebase.auth().signInWithEmailAndPassword(data.email, data.password)
                .then(function(authData) {
                    console.log("Authenticated successfully with payload:", authData);
                    auth = authData;
                    console.log(loggedin);
                    $("#inAsName").text("user");
                    $("#inAsEmail").html(loggedin);
                    getLoggedInUser(); 
                    window.location.assign("/loggedin.html");
                    $('#messageModalLabel').html(spanText('Success!', ['center', 'success']))
                    setTimeout(function() {
                        $('#messageModal').modal('hide');
                        $('.unauthenticated, .userAuth').toggleClass('unauthenticated').toggleClass('authenticated');
                        // contactsRef.child(auth.uid)
                        //     .on("child_added", function(snap) {
                        //         console.log("added", snap.key(), snap.val());
                        //         $('#contacts').append(contactHtmlFromObject(snap.val()));
                        // });
                    }, 3000);
                })
                .catch(function(error) {
                    console.log("Login Failed!", error);
                    $('#messageModalLabel').html(spanText('ERROR: ' + error.code, ['danger']))
                });
        }
    });

    //save contact
    $('.addValue').on("click", function(event) {
        event.preventDefault();
        if (auth != null) {
            if ($('#name').val() != '' || $('#email').val() != '') {
                contactsRef.child(auth.uid)
                    .push({
                        name: $('#name').val(),
                        email: $('#email').val(),
                        location: {
                            city: $('#city').val(),
                            state: $('#state').val(),
                            zip: $('#zip').val()
                        }
                    })
                document.contactForm.reset();
            }
            else {
                alert('Please fill at-lease name or email!');
            }
        }
        else {
            //inform user to login
        }
    });
})

// Function to get the current user by email
function getLoggedInUser(){   
    var user = firebase.auth().currentUser;
    var firstName;
    var lastName;
    var email;
    if (user) {
        firstName = user.firstName;
        lastName = user.lastName;
        email = user.email;
        console.log(user.firstName);
    } else {
     console.log("No User");
 }
}

//prepare contact object's HTML
function contactHtmlFromObject(contact) {
    console.log(contact);
    var html = '';
    html += '<li class="list-group-item contact">';
    html += '<div>';
    html += '<p class="lead">' + contact.name + '</p>';
    html += '<p>' + contact.email + '</p>';
    html += '<p><small title="' + contact.location.zip + '">' +
        contact.location.city + ', ' +
        contact.location.state + '</small></p>';
    html += '</div>';
    html += '</li>';
    return html;
}

function spanText(textStr, textClasses) {
    var classNames = textClasses.map(c => 'text-' + c).join(' ');
    return '<span class="' + classNames + '">' + textStr + '</span>';
}
