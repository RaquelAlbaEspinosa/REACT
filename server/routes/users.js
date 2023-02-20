var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");
var multer = require("../middleware/multer");

router.post("/createUser", multer("user"), userController.createUser);
router.get("/setAllUser", userController.getAllUsers);


module.exports = router;
