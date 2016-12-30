var User = require('../Schemas/User'); //Schemu koju smo napravili zahteva
                                      // require vraca onaj modul koji je kreiran u User.js u schemas

exports.createUser = function (req, res) {
    if (req.body.username) { //ocekuje se da u body bude json sa username=" "
        var user = new User();
        user.username = req.body.username;
        user.save(function (err) {
            if (err) {
                res.status(500).json("An error occurred");
            }
            else {
                res.status(200).json(user);
            }
        });
    }
    else {
        res.status(400).json("Specify an username");
    }
};

exports.getUsers = function (req, res){//svaka fja koja ima exports. ispred se exportuje kada se ukljuci ovaj fajl u drugi fajl
    User.find({}, function (err, doc) {//ove prazne zagrade {} tu mu butnem sta da trazi, drugi parametar je sta da uradi kad nadje(u ovom slucaju callback
        // kad nadje ga poziva
        //doc je sve sta vraca
        if (err) {
            res.status(500).json("An error occurred");
        }
        else {
            res.status(200).json(doc);
        }
    })
};