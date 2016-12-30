const neo4j = require('node-neo4j');
const NeoNode = require('../NeoSchemas/NeoNode');
const NeoLink = require('../NeoSchemas/NeoLink');
let db = new neo4j('http://neo4j:test@localhost:7474');

exports.createNode = function (req, res) {
    let node = new NeoNode();
    if (req.body.description)
        node.description = req.body.description;


    if (req.body.label) { //za tagove
        db.insertNode(node, req.body.label, function (err, node) {
            if (err) {
                res.status(500).json("An error occurred");
            }
            else {
                res.status(200).json(node);
            }
        });
    }


    else {
        res.status(400).json("No testdata in request");
    }
};




exports.getNodes = function (req, res) {
    if (req.body.label) {
        db.readNodesWithLabel(req.body.label, function (err, nodes) {
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

exports.createLink=function(req,res) {
    let link = new NeoLink();
    if(req.body.description)
    {
        link.description=req.body.description;
    }
    if(req.body.beginNode && req.body.endNode)
    {
        db.readNode(req.body.beginNode,function (err,node) {
            if(err)
            {
                res.status(500).json("An error occurred");
            }
            else if(!node)
            {
                res.status(400).json("Bad request");
            }
            else
            {
                db.readNode(req.body.endNode,function (err,node)
                {
                if(err)
                {
                res.status(500).json("An error occurred");
                }
                else if(!node)
                {
                res.status(400).json("Bad request");
                }
                else
                {
                    db.insertRelationship(req.body.beginNode,req.body.endNode,"test",link,function (err,relationship) {
                       if(err)
                          res.status(500).json("An error occurred");
                        else
                           res.status(200).json(relationship);
                    })
                }
                })
            }
        })
    }
}

exports.testSchema = function (req,res) {

    let nodeObject = new NeoNode();
    console.log(nodeObject.toString());
    res.status(200).json("Zdravo ");

}