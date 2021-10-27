const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router()

/* GET home page. */
router.get('/', OrderController.findAll);
router.get('/:id', OrderController.findOne)
router.post('/', OrderController.create);
router.delete('/:id', OrderController.delete);
router.put('/:id', OrderController.update)

module.exports = router