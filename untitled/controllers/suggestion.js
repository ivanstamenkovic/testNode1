/**
 * Created by Stefan on 12/30/2016.
 */
const NodeSuggestion = require('../Schemas/NodeSuggestion');

exports.addTestNodeSuggestion = function (req, res) {
    let nijeUser = new NodeSuggestion();
    
    nijeUser.type = "create";
    nijeUser.date_created = Date.now();
    
    nijeUser.save(function (err) {
        if (err) {
            res.status(500).json("an error occured");
        }
        else {
            res.status(200).json(nijeUser);
        }
    })
};