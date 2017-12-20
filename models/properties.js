// Dependencies

// Require Sequelize library
var Sequelize = require("sequelize");
// Require connection to our DB.
var sequelize = require("../controllers/homeListings.js");

//Create a "homeListing" model that matches up with the DB homeListings.
//"listings" is the name of the table in mySQL
var homeListings = sequelize.define("listings", {
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

// Syncs with DB
homeListings.sync();

// Makes the homeListings available for other files (will also create a table)
module.exports = homeListings;
