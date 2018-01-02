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

// delete route for bookings 
router.delete("/api/bookings/:id", function(req, res) {
    db.Booking.destroy({
        id: req.params.id
    }).then(function(data) {
        res.json(data);
    });
});

// PUT route for updating the bookings 
router.put("/api/bookings", function(req, res) {
    db.Booking.update({
        name: req.body.name,
        price: req.body.price
    }, {
        where: { id: req.body.id }
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;
