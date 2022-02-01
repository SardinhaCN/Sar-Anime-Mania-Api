const express = require('express');
const router = express.Router();

const Get = require('../rotas/get');

router.get("/config", Get.getConfig);

router.get("/app", Get.getApp);

router.get("/desktop", Get.getDesktop);

module.exports = router;