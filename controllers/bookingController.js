//routing for the bookings table

var db = require("../models");

var express = require("express");

var router = express.Router();



//get route to see all bookings

router.get("/api/bookings", function(req, res) {
    db.Booking.findAll({ include: [db.User] }).then(function(allBookings) {
        res.json(allBookings);
    });
});

//put route to place a new booking
router.post("/api/bookings", function(req, res) {
    db.Booking.create({ include: [db.User] }).then(function(allBookings) {
        console.log(req.body);
        db.Booking.create({
            listId: req.body.listId,
            arriveDate: req.body.arriveDate,
            leaveDate: req.body.leaveDate
        }).then(function(newBooking) {
            res.json(newBooking);
        });
    });
});

// delete route for bookings that

// PUT route for updating the bookings 
module.exports = router;
