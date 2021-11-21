const express = require('express');
const router = express.Router();
// Call products controller
const productsController = require('../controllers/productsController');

// Call multer middleware to upload games images cover
const uploadCoverImage = require('../middleware/multerGameImage');

// Set Routes
// Product Details Route
router.get('/', productsController.list);

// Product Create Route
router.get('/create', productsController.create);

// Product Catch Data from Create Form Route
router.post('/store', uploadCoverImage.single("coverImage"), productsController.store);

// Product Details Route
router.get('/:id', productsController.detail);

// Product Edit
router.get("/edit/:id", productsController.getEdit)
router.put('/:id', uploadCoverImage.single("image"), productsController.edit)

// Product Delete
router.delete('/:id', productsController.delete)


module.exports = router;