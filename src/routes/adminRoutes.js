const express = require('express');
const router = express.Router();

// Call admin controller
const adminController = require('../controllers/adminController');

// Call multer middleware to upload games images cover
const uploadCoverImage = require('../middleware/multerGameImage');

// Call multer middleware to upload users images avatars
const uploadAvatar = require('../middleware/multer');

// Game Details Route
router.get('/', adminController.list);

// Game Search form
router.post('/search', adminController.search);

// Game Create Route
router.get('/create', adminController.create);
// Game Store Catch Data from Create Form Route
router.post('/store', uploadCoverImage.single("coverImage"), adminController.store);

// Game Edit
router.get("/edit/:id", adminController.getEdit)
// Game Update
router.put('/update/:id', uploadCoverImage.single("coverImage"), adminController.edit)

// Game Delete
router.delete('/delete/:id', adminController.delete)


// User routes
// User List Route
router.get('/user/', adminController.userList);
// User Create
router.get('/user/create', adminController.userCreate);
// User => Store New User Route
router.post('/user/store', uploadAvatar.single("coverImage"), adminController.userStore);
// User Edit
router.get('/user/:id', adminController.userGetEdit);
// User Update
router.put('/user/update/:id', uploadAvatar.single("coverImage"), adminController.userUpdate)

module.exports = router;