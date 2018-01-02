//require the models folder
var db = require("../models");

var express = require("express");
var app = express();
var router = express.Router();
app.use(router);
//"get" route for all current home listings... include dummy data. For the host and renter

router.get("/api/homelistings", function(req, res) {
    db.HomeListing.findAll({ include: [db.User] }).then(function(allListings) {
        res.json(allListings);
    });
});

//post route for users to post a new home listing ... for the host and renters.
router.post("/api/homelistings", function(req, res) {
    console.log(req.body);
    //create a new home listing and pass it into an object
    db.HomeListing.create({
        name: req.body.name,
        email: req.body.email,
        address:req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipcode: req.body.zipcode,
        phone: req.body.phone,
        taxid:  req.body.taxid,
        photo1: req.body.photo1,
        photo2: req.body.photo2,
        photo3: req.body.photo3,
        description: req.body.description,
        rate: req.body.rate
    }).then(function(newListing) {
        res.json(newListing);
    });
});

//delete route for the hosts to delete their posting. For someone who has posted an item only. 
router.delete("/api/homelistings/:id", function(req, res) {
    db.HomeListing.destroy({
        id: req.params.id
    }).then(function(data) {
        res.json(data);
    });
});

//PUT route for updating postings. For someone who has posted an item only. 
router.put("/api/homelistings", function(req, res) {
    db.HomeListing.update({
        name: req.body.name,
        price: req.body.price
    }, {
        where: { id: req.body.id }
    }).then(function(data) {
        res.json(data);
    });
});

module.exports = router;
