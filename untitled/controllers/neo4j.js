var neo4j = require('node-neo4j');

var db = new neo4j('http://neo4j:test@localhost:7474');

exports.createNode = function (req, res) {
    if (req.body.testdata) {
        if (req.body.label) {
            db.insertNode(req.body.testdata, req.body.label, function (err, node) {
                if (err) {
                    res.status(500).json("An error occurred");
                }
                else {
                    res.status(200).json(node);
                }
        });
        }
        else {
            res.status(400).json("No label in request");
        }
    }
    else {
        res.status(400).json("No testdata in request");
    }
};


exports.getNodes = function (req, res) {
    if (req.body.label) {
        db.readNodesWithLabel("Dingo", function (err, nodes) {
            if (err) {
                res.status(500).json("An error occurred");
            }
            else {
                res.status(200).json(nodes);
            }
        });
    }
    else {
        res.status(400).json("No label in request");
    }

};