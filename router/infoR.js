const express = require("express");
const router = express.Router();

const {getids} = require ("../controllers/infoC");

router.route("/").get(getids);

module.exports = router;
