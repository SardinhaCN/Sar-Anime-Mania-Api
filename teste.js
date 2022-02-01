const fs = require("fs");

const funcoes = require("./Funcoes");

let data = funcoes.load('./DataBase/db.json');

let data1 = JSON.stringify(obj),
data = JSON.parse(data1);

let array = [
  "id",
  "Pesquisa",
  "Titulo_do_anime",
  "Capa_do_Anime",
  "Banner_do_Anime",
  "Trailer_do_Anime",
  "Formato",
  "Autor",
  "Diretor",
  "Estudio",
  "Tipo_de_Episodio",
  "Episodios",
  "Ovas",
  "Filmes",
  "Anime_Para",
  "Ano",
  "Dialog_Titulo",
  "Sinopse",
  "Lancamento_Controle",
  "Dia_do_Lancamento"
]

function JsonTeste() {
  fs.writeFile('./dbTeste.json', JSON.stringify(data, array, 2), 'utf-8', (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    console.log(result)
  })
}
JsonTeste();