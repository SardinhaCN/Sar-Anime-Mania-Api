exports.SplitYouTube = async (url) => {
  try {
    let yt = url.split('/'),
    trailer = `https://www.youtube.com/embed/${yt[3]}?rel\u003d0\u0026autoplay\u003d1`;
    return trailer;
  } catch (error) {
    return console.log({
      message: `Falha ao tendar contruir url embed!`,
      erro: `${error}`
    });
  }
}