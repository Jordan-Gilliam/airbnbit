//routing for the users table

var db = require("../models");

var express = require("express");

var router = express.Router();

//get route to see all users

router.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(allUsers) {
        res.json(allUsers);
    });
});

module.exports = router;
