//require the models folder
var db = require("../models");

module.exports = function(app) {
    //"get" route for all current home listings... include dummy data. For the host and renter

    app.get("/api/homelistings", function(req, res) {
        db.homeListings.findAll({}).then(function(newListing) {
            res.json(newListing);
        });
    });

    //post route for users to post a new home listing ... for the host and renters.

    app.post("/api/homelistings", function(req, res) {
        console.log(req.body);
        //create a new home listing and pass it into an object
        db.homeListings.create({
            name: req.body.name,
            price: req.body.price
        }).then(function(homeListings) {
            res.json(homeListings);
        });
    });

    //delete route for the hosts to delete their posting. For someone who has posted an item only. 

    app.delete("/api/homelistings/:id", function(req, res) {
        db.homeListings.destroy({
            id: req.params.id
        }).then(function(homeListings) {
            res.json(homeListings);
        });
    });

    //PUT route for updating postings. For someone who has posted an item only. 

    app.put("/api/homelistings", function(req, res) {
        db.homeListings.update({
            name: req.body.name,
            price: req.body.price
        }, {
            where: { id: req.body.id }
        });
    });

};
