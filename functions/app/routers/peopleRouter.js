const express = require("express");
const router = express.Router();
const controller = require("../controllers/peopleController")();
router.get("/", controller.getList);
module.exports = router;
