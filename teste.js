const funcoes = require("./Funcoes");

let data = require('./DataBase/data.json');

let data1 = JSON.stringify(data), obj = JSON.parse(data1);

const express = require("express");
const app = express();
app.use(express.json());

app.post("/api", function(req, res) {
  const { pesq, title, capa, banner, trailer, formato, autor, diretor, estudio, episodios, ovas, filmes, ano, dialogTitulo, sinopse, lancamentoControle, diaLancamento } = req.body;

  // salvar
  let id = obj[0].anime.length + 1;
  let youtube = funcoes.SplitYouTube('https://youtu.be/_imMNCUQ6uA');

  let dbInfo = `{
        "id": ${id},
        "Pesquisa": "${pesq}",
        "Titulo_do_anime": "${title} – Todos os Episodios",
        "Capa_do_Anime": "${capa}",
        "Banner_do_Anime": ${banner}",
        "Trailer_do_Anime": "${youtube}",
        "Formato": "${formato}",
        "Autor": "${autor}",
        "Diretor": "${diretor}",
        "Estudio": "${estudio}",
        "Tipo_de_Episodio": "Legendado Pt-Br",
        "Episodios": ${episod },
        "Ovas": ${ovas},
        "Filmes": ${filmes},
        "Anime_Para": "Assistir Online",
        "Ano": ${ano},
        "Dialog_Titulo": "${dialogTitulo}",
        "Sinopse": "${sinopse}",
        "Lancamento_Controle": ${lancamentoControle},
        "Dia_do_Lancamento": "${diaLancamento}"
      }`;
  res.json(dbInfo);
});

app.listen(3000, function() {
  console.log("Server is running");
});