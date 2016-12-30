/**
 * Created by Stefan on 12/30/2016.
 */
const NeoLink = require('../NeoSchemas/NeoLink');
const NeoNode = require('../NeoSchemas/NeoNode');
const User = require('./User');

var mongoose = require('mongoose');

var NodeSuggestionSchema = mongoose.Schema({
    author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    type : String,
    node : mongoose.Schema.Types.Mixed,
    date_created : Number
});



NodeSuggestion = mongoose.model('NodeSuggestion', NodeSuggestionSchema);

module.exports = NodeSuggestion;