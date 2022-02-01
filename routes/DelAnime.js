const express = require('express');
const router = express.Router();

const Get = require('../rotas/delete');

router.delete("/anime/:id", Get.delAnime);

module.exports = router;