exports.notification = function(req, res) {
    console.log(req.body);
    res.status(200);
    res.send("respond with a resource");
};