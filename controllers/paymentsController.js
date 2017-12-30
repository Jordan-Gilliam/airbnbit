//routing for the payments

var app = express();

var db = require("../models");

var express = require("express");

var router = express.Router();

// // post route for payments
router.post('api/payments/:id', payments.notification);


module.exports = router;
