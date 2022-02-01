const funcoes = require("../Funcoes");

let youtube = funcoes.SplitYouTube()
let data = funcoes.load('../DataBase/db.json');

let data1 = JSON.stringify(data),
    obj = JSON.parse(data1);

/*
let config = obj.config,
    aplicativo = obj.config.App,
    desktop = obj.config.AppDesktop,
    anime = obj.Anime,
    episodios = obj.Anime[0].UrlEpisodios;
*/

exports.getAnimesId = async(req, res, next) => {
    try {
        const { id } = req.params;
        const idData = anime.find(dat => dat.id == id);
        if (!idData) return res.status(204).json();
        return res.status(200).json(idData);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
}

let = `{
    "id": 10,
    "Pesquisa": "Kimetsu no Yaiba",
    "Titulo_do_anime": "Kimetsu no Yaiba – Todos os Episódios",
    "Capa_do_Anime": "https://www.anitube.site/wp-content/uploads/Kimetsu-no-Yaiba-Todos-os-Episodios.png",
    "Banner_do_Anime": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgEDvo4DfPOZkn3Yz4k7yNCUeqW6Z7h10qEVAsHktPvQMDQeul",
    "Trailer_do_Anime": ${youtube},
    "UrlEpisodios": {
      "Legendado": [
        "https://animefire.net/video/kimetsu-no-yaiba/1",
        "https://animefire.net/video/kimetsu-no-yaiba/2",
        "https://animefire.net/video/kimetsu-no-yaiba/3",
        "https://animefire.net/video/kimetsu-no-yaiba/4",
        "https://animefire.net/video/kimetsu-no-yaiba/5",
        "https://animefire.net/video/kimetsu-no-yaiba/6",
        "https://animefire.net/video/kimetsu-no-yaiba/7",
        "https://animefire.net/video/kimetsu-no-yaiba/8",
        "https://animefire.net/video/kimetsu-no-yaiba/9",
        "https://animefire.net/video/kimetsu-no-yaiba/10",
        "https://animefire.net/video/kimetsu-no-yaiba/11",
        "https://animefire.net/video/kimetsu-no-yaiba/12",
        "https://animefire.net/video/kimetsu-no-yaiba/13",
        "https://animefire.net/video/kimetsu-no-yaiba/14",
        "https://animefire.net/video/kimetsu-no-yaiba/15",
        "https://animefire.net/video/kimetsu-no-yaiba/16",
        "https://animefire.net/video/kimetsu-no-yaiba/17",
        "https://animefire.net/video/kimetsu-no-yaiba/18",
        "https://animefire.net/video/kimetsu-no-yaiba/19",
        "https://animefire.net/video/kimetsu-no-yaiba/20",
        "https://animefire.net/video/kimetsu-no-yaiba/21",
        "https://animefire.net/video/kimetsu-no-yaiba/22",
        "https://animefire.net/video/kimetsu-no-yaiba/23",
        "https://animefire.net/video/kimetsu-no-yaiba/24",
        "https://animefire.net/video/kimetsu-no-yaiba/25",
        "https://animefire.net/video/kimetsu-no-yaiba/26"
      ],
      "Dublado": [
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/1",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/2",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/3",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/4",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/5",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/6",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/7",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/8",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/9",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/10",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/11",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/12",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/13",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/14",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/15",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/16",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/17",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/18",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/19",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/20",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/21",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/22",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/23",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/24",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/25",
        "https://animefire.net/video/kimetsu-no-yaiba-dublado/26"
      ],
      "TituloEp": [
        "Episódio 1",
        "Episódio 2",
        "Episódio 3",
        "Episódio 4",
        "Episódio 5",
        "Episódio 6",
        "Episódio 7",
        "Episódio 8",
        "Episódio 9",
        "Episódio 10",
        "Episódio 11",
        "Episódio 12",
        "Episódio 13",
        "Episódio 14",
        "Episódio 15",
        "Episódio 16",
        "Episódio 17",
        "Episódio 18",
        "Episódio 19",
        "Episódio 20",
        "Episódio 21",
        "Episódio 22",
        "Episódio 23",
        "Episódio 24",
        "Episódio 25",
        "Episódio 26"
      ],
      "EpLegendado": ,
      "EpDublado": 
    },
    "Formato": "Anime",
    "Genero": [
      "Ação",
      "Histórico",
      "Demônios",
      "Sobrenatural",
      "Shounen"
    ],
    "Autor": "",
    "Diretor": "",
    "Estudio": "",
    "Tipo_de_Episodio": "Legendado Pt-Br",
    "Episodios": ,
    "Ovas": ,
    "Filmes": ,
    "Anime_Para": "Assistir Online",
    "Ano": ,
    "Dialog_Titulo": "",
    "Sinopse": "",
    "Lancamento_Controle": "Não",
    "Dia_do_Lancamento": "TEXTO"
  }`;