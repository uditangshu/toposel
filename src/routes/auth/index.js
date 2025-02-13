const express = require("express");
const userController = require("../../controllers/user");
const verifyToken = require("../../middlewares/authMiddleware");

const router = express.Router();

router.route("/register").post(userController.registerUser);
router.route("/login").post( userController.loginUser);
router.route("/users").get( verifyToken("admin"), userController.searchUser); 
module.exports = router;
