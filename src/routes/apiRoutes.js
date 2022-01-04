const express = require('express');
const router = express.Router();
// Call API controller
const apiController = require('../controllers/apiController');

// Set API Routes
router.get('/users', apiController.users);

module.exports = router;