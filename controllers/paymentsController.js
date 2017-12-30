//routing for the payments

var app = express();

var express = require("express");

var router = express.Router();

// // post route for payments
app.post('/payments/:id', payments.notification);


module.exports = router;
