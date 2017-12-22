exports.notification = function(req, res) {
    console.log(req.body);
    res.status(200);
};

var Bitpay = require('bitpay-node');
var client = new Bitpay.Client({ apiKey: 'x50P8Udd1rIEqhQ0qSQBYaBkTRfvVauZrmJzUVH0wSg' });

var invoiceOptions = {
    price: 0.001,
    currency: 'BTC'
};

client.createInvoice(invoiceOptions, function(err, invoice) {
    console.log(invoice);
});
