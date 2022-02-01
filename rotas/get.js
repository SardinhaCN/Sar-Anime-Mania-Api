const funcoes = require("../Funcoes");

let data = funcoes.load('./DataBase/db.json');

let data1 = JSON.stringify(data),
obj = JSON.parse(data1);

let config = obj.config,
aplicativo = obj.config.App,
desktop = obj.config.AppDesktop,
anime = obj.Anime,
episodios = obj.Anime[0].UrlEpisodios;

exports.getConfig = async (req, res, next) => {
  try {
    return res.status(200).json(config);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getApp = async (req, res, next) => {
  try {
    return res.status(200).json(aplicativo);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getDesktop = async (req, res, next) => {
  try {
    return res.status(200).json(desktop);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAll = async (req, res, next) => {
    try {
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimes = async (req, res, next) => {
    try {
    return res.status(200).json(anime);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimesId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idData = anime.find(dat => dat.id == id);
    if (!idData) return res.status(204).json();
    return res.status(200).json(idData);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimesInfoEps = async (req, res, next) => {
  try {
    const { id, type } = req.params;

    const idData = anime.find(dat => dat.id == id);

    let episodios = idData.UrlEpisodios;

    return res.status(200).json(episodios);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimesLeg = async (req, res, next) => {
  try {
    const { id, type } = req.params;

    const idData = anime.find(dat => dat.id == id);

    let episodios = idData.UrlEpisodios,
    legendado = episodios.Legendado;

    return res.status(200).json(legendado);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimesEpDub = async (req, res, next) => {
  try {
    const { id, type } = req.params;

    const idData = anime.find(dat => dat.id == id);

    let episodios = idData.UrlEpisodios,
    dublado = episodios.Dublado;
    
    return res.status(200).json(dublado);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimesEpTit = async (req, res, next) => {
  try {
    const { id, type } = req.params;

    const idData = anime.find(dat => dat.id == id);

    let episodios = idData.UrlEpisodios,
    TitleEp = episodios.TituloEp;
    
    return res.status(200).json(TitleEp);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}

exports.getAnimesGenero = async (req, res, next) => {
  try {
    const { id, type } = req.params;

    const idData = anime.find(dat => dat.id == id);

    let genero = idData.Genero;
    
    return res.status(200).json(genero);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}