let data = require('../DataBase/db.json');

let data1 = JSON.stringify(data),
  obj = JSON.parse(data1);

let config = obj.config,
  aplicativo = obj.config.App,
  desktop = obj.config.AppDesktop,
  anime = obj.Anime,
  episodios = obj.Anime[0].UrlEpisodios;

exports.delAnime = async (req, res, next) => {
  try {
    const { id } = req.params;
    const clientsFiltered = data.filter(client => client.id != id);
    return res.status(200).json(clientsFiltered);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
}
