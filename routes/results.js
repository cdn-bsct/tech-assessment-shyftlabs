const express = require("express");
const router = express.Router();
const resultsCtrl = require("../controller/results");

// get results
router.get("/", resultsCtrl.getResults);

// add results
router.post("/create", resultsCtrl.addResults);

module.exports = router;
