const express = require('express');
const router = express.Router();

// Call admin controller
const adminController = require('../controllers/adminController');

// Call multer middleware to upload games images cover
const uploadCoverImage = require('../middleware/multerGameImage');

// Product Details Route
router.get('/', adminController.list);

// Product Search form
router.post('/search', adminController.search);

// Product Create Route
router.get('/create', adminController.create);
// Product Catch Data from Create Form Route
router.post('/store', uploadCoverImage.single("coverImage"), adminController.store);

// Product Edit
router.get("/edit/:id", adminController.getEdit)
router.put('/update/:id', uploadCoverImage.single("coverImage"), adminController.edit)

// Product Delete
router.delete('/delete/:id', adminController.delete)

module.exports = router;