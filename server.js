const express = require("express");
const app = express();
app.use(express.json());

const Get = require('./method/get');

app.get(`/api`, Get.getAll);

app.get("/api/app", Get.getApp);

app.get("/api/desktorouterp", Get.getDesktop);

app.get("/api/anime", Get.getAnimes);

app.get("/api/anime/:id", Get.getAnimesId);

app.get("/api/anime/:id/eps", Get.getAnimesInfoEps);

app.get("/api/anime/:id/eps/legendado", Get.getAnimesLeg);
app.get("/api/anime/:id/eps/dublado", Get.getAnimesEpDub);
app.get("/api/anime/:id/eps/title", Get.getAnimesEpTit);

app.get("/api/anime/:id/genero", Get.getAnimesGenero);



/*
app.post("/api", function(req, res) {
  const { pesq, title, capa, banner, trailer } = req.body;

  // salvar
  let id = obj[0].anime.length + 1;
  let youtube = SplitYouTube('https://youtu.be/_imMNCUQ6uA');

  let d = `{
        "id": ${id},
        "Pesquisa": ${pesq},
        "Titulo_do_anime": "${title} – Todos os Episodios",
        "Capa_do_Anime": "${capa}",
        "Banner_do_Anime": ${banner}",
        "Trailer_do_Anime": "${youtube}",
        "UrlEpisodios": {
          "Legendado": [],
          "Dublado": [],
          "TituloEp": [],
          "EpLegendado": false,
          "EpDublado": false
        },
        "Formato": "",
        "Genero": [],
        "Autor": "",
        "Diretor": "",
        "Estudio": "",
        "Tipo_de_Episodio": "Legendado Pt-Br",
        "Episodios": 0,
        "Ovas": 0,
        "Filmes": 0,
        "Anime_Para": "Assistir Online",
        "Ano": "",
        "Dialog_Titulo": "",
        "Sinopse": "",
        "Lancamento_Controle": false,
        "Dia_do_Lancamento": "TEXTO"
      }`;
  res.json(d);
});

app.put("/api/:id", function(req, res) {
  const { id } = req.params;
  const data = animeData.find(dat => dat.id == id);

  if (!data) return res.status(204).json();

  const { name } = req.body;

  data.name = name;

  res.json(data);
});

app.delete("/api/:id", function(req, res) {
  const { id } = req.params;
  if (id == "") {
    res.json({ mensage: "Fralha eu tendar encontrar o ID!" });
  } else {
    const dataFiltered = animeData.filter(dat => dat.id != id);
    res.json(dataFiltered);
  }
});
*/

app.listen(3000, function() {
  console.log("Server is running");
});