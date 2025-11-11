const express = require("express");
const router = express.Router();
const controller = require("./userController.js");

router.get("/me", controller.profile);

module.exports = router;
