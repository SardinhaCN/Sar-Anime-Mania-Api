const express = require('express');
const router = express.Router();

const Get = require('./method/get');

router.get(`/api`, Get.getAll);

router.get("/api/anime", Get.getAnimes);

router.get("/api/anime/:id", Get.getAnimesId);

router.get("/api/anime/:id/eps", Get.getAnimesInfoEps);

router.get("/api/anime/:id/eps/legendado", Get.getAnimesLeg);
router.get("/api/anime/:id/eps/dublado", Get.getAnimesEpDub);
router.get("/api/anime/:id/eps/title", Get.getAnimesEpTit);

router.get("/api/anime/:id/genero", Get.getAnimesGenero);

module.exports = router;