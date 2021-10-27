var express = require('express');
const userController = require('../controllers/userControllers')
var router = express.Router();

/* GET users listing. */
router.post('/register',userController.registerUser)
router.post('/login',userController.loginUser)

module.exports = router;
