const express = require('express');
const router = express.Router();

const Get = require('./method/get');

router.get("/api/app", Get.getApp);

router.get("/api/desktorouterp", Get.getDesktop);

module.exports = router;