const express = require('express');
const router = express.Router();
// Call products controller
const productsController = require('../controllers/productsController');

// Set Routes
// Product Details Route
router.get('/:id', productsController.detail);

module.exports = router;