var express = require('express');

var router = express.Router();
var login = require('../controllers/login');

router.post('/', login.login); //用户详情

module.exports = router;