// /**
//  * Created by Stefan on 12/30/2016.
//  */
//
 var schedule = require('node-schedule');
var NodeSuggestion = require('../Schemas/NodeSuggestion');

var rule = new schedule.RecurrenceRule();
rule.second = new schedule.Range(0,59,30);

schedule.scheduleJob(rule,function()
{
    let timeCheck = Date.now() - 1*60*1000;
    console.log(timeCheck);
    NodeSuggestion.find({
        'date_created':{$lt:timeCheck}
    },function (err,doc) {
        console.log(doc);

    })
});