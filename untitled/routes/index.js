var express = require('express');
var router = express.Router();

var userController = require('..\\controllers\\user.js');
var neo4jController = require('..\\controllers\\neo4j.js');
var suggestionController = require('../controllers/suggestion');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/createuser').post(userController.createUser);//navodi se ime rute i nakon toga f-ja koja se postavlja na rutu
router.route('/getusers').get(userController.getUsers);

router.route('/createnode').post(neo4jController.createNode);
router.route('/getnodes').post(neo4jController.getNodes);
router.route('/testschema').get(neo4jController.testSchema);
router.route('/insertlink').post(neo4jController.createLink);

router.route('/divokoza').get(function(req,res,next) { console.log("sad sam upao"); next() }, suggestionController.addTestNodeSuggestion);

module.exports = router;
