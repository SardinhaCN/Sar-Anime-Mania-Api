const express = require('express');
const router = express.Router();

const Get = require('../rotas/get');

router.get(`/`, Get.getAll);

router.get("/anime", Get.getAnimes);

router.get("/anime/:id", Get.getAnimesId);

router.get("/anime/:id/eps", Get.getAnimesInfoEps);

router.get("/anime/:id/eps/legendado", Get.getAnimesLeg);
router.get("/anime/:id/eps/dublado", Get.getAnimesEpDub);
router.get("/anime/:id/eps/title", Get.getAnimesEpTit);

router.get("/anime/:id/genero", Get.getAnimesGenero);

module.exports = router;