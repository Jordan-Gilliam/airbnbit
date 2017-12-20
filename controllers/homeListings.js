//require the models folder
var db = require("../models");

var express = require("express");

var router = express.Router();

//"get" route for all current home listings... include dummy data. For the host and renter

router.get("/api/homelistings", function(req, res) {
    db.HomeListings.findAll({}).then(function(allListings) {
        res.json(allListings);
    });
});

//post route for users to post a new home listing ... for the host and renters.
router.post("/api/homelistings", function(req, res) {
    console.log(req.body);
    //create a new home listing and pass it into an object
    db.HomeListings.create({
        name: req.body.name,
        price: req.body.price
    }).then(function(newListing) {
        res.json(newListing);
    });
});

//delete route for the hosts to delete their posting. For someone who has posted an item only. 

router.delete("/api/homelistings/:id", function(req, res) {
    db.HomeListings.destroy({
        id: req.params.id
    }).then(function(data) {
        res.json(data);
    });
});

//PUT route for updating postings. For someone who has posted an item only. 
router.put("/api/homelistings", function(req, res) {
    db.HomeListings.update({
        name: req.body.name,
        price: req.body.price
    }, {
        where: { id: req.body.id }
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;
