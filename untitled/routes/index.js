var express = require('express');
var router = express.Router();

var userController = require('..\\controllers\\user.js');
var neo4jController = require('..\\controllers\\neo4j.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.route('/createuser').post(userController.createUser);
router.route('/getusers').get(userController.getUsers);

router.route('/createnode').post(neo4jController.createNode);
router.route('/getnodes').post(neo4jController.getNodes);

module.exports = router;
