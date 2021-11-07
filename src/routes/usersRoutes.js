const express = require('express');
const router = express.Router();
// Call Users controller
const usersController = require('../controllers/usersController');
// Call Validator for Register form
const validateRegister = require('../middleware/registerValidator');
// Call guestMiddleware to check if user is already registered
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');
const uploadAvatar = require('../middleware/multer');

// Cart Details Route
router.get('/cart', guestMiddleware, authMiddleware, usersController.cart);

// Login Route
router.get('/login', guestMiddleware, usersController.login);

// Register Route
router.get('/register', guestMiddleware, usersController.register);

router.post('/createuser', uploadAvatar.single('userimage'), validateRegister, usersController.createUser);

module.exports = router;