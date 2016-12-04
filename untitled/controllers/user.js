var User = require('../Schemas/User');

exports.createUser = function (req, res) {
    if (req.body.username) {
        var user = new User();
        user.username = req.body.username;
        user.save(function (err) {
            if (err) {
                res.status(500).json("An error occurred");
            }
            else {
                res.status(200).json("Success");
            }
        });
    }
    else {
        res.status(400).json("Specify an username");
    }
};

exports.getUsers = function (req, res) {
    User.find({}, function (err, doc) {
        if (err) {
            res.status(500).json("An error occurred");
        }
        else {
            res.status(200).json(doc);
        }
    })
};