var Bitpay = require('bitpay-node');
var client = new Bitpay.Client({ apiKey: 'cODHIgOxseO36CAF0BrVQNpRp6gGCWmA7mFvt5MI' });


client.createInvoice({ price: 0.00001, currency: 'BTC' }, function(err, invoice) {
    console.log(invoice);
});
