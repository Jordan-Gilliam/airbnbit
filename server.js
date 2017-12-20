// Dependencies
// =============================================================
var express = require("express");
var Sequelize = require("sequelize");
var bodyParser = require("body-parser");

var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");


app.set("view engine", "handlebars");

var route = require("./controllers/burger_controllers.js");
app.use("/", route);

app.listen(PORT, function() {
    console.log("Listening on " + PORT);
});