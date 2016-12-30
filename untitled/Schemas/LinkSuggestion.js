const NeoLink = require('../NeoSchemas/NeoLink');
const NeoNode = require('../NeoSchemas/NeoNode');

var mongoose = require('mongoose');

var LinkSuggestionSchema = mongoose.Schema({
    author: ObjectId,
    type : String,
    link : NeoLink,
    node1 : NeoNode,
    node2 : NeoNode
    
});

LinkSuggestion = mongoose.model('LinkSuggestion', LinkSuggestionSchema);

module.exports = LinkSuggestion;
