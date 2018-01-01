/* global $ */
//routing for the users table

var db = require("../models");

var express = require("express");

var router = express.Router();

//get route to see all users

router.get("/api/users", function(req, res) {
    db.User.findAll({ include: [db.Booking, db.HomeListing] }).then(function(allUsers) {
        res.json(allUsers);
    });
});

 $.get("/api/users", function(req,currentUser) {
         db.Users.findAll({
        where: {
            "email": email
        }
   }).then(function(currentUser) {
        currentUser.json(currentUser);
        console.log(currentUser);
        // Need helper to unpack these results NEED TO COMPLETE
    });
 });

module.exports = router;
