//routing for the bookings table

var db = require("../models");

var express = require("express");

var router = express.Router();

//get route to see all bookings

router.get("/api/bookings", function(req, res) {
    db.User.findAll({}).then(function(allBookings) {
        res.json(allBookings);
    });
});

module.exports = router;
