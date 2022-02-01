const fs = require("fs");

const funcoes = require("./Funcoes");

let data = funcoes.load('./d0b.json');

let data1 = JSON.stringify(data),
  obj = JSON.parse(data1);

let anime = obj,
  title = obj.Pesquisa,
  episodios = obj.UrlEpisodios,
  genero = obj.Genero;

let ti, ani, ep, ge;

let animeInfo = {

}



createFolder(title, null, episodios, genero);

async function createFolder(title, dataAnime, dataEp, dataGenero) {
  if (!title == null) { ti = true } else { ti = false };
  if (!dataAnime == null) { ani = true } else { ani = false };
  if (!dataEp == null) { ep = true } else { ep = false };
  if (!dataGenero == null) { ge = true } else { ge = false };


  let exist = existSync(`./DataBase/${title}`);
  if (exist) {
    if (ani == true) {
      funcoes.save({
        conteudo: dataAnime,
        caminho: `./DataBase/${title}/infoAnime.json`
      });
    }
    if (ep == true) {
      funcoes.save({
        conteudo: dataEp,
        caminho: `./DataBase/${title}/Episodios.json`
      });
    }
    if (ge == true) {
      funcoes.save({
        conteudo: dataGenero,
        caminho: `./DataBase/${title}/genero.json`
      });
    }

  } else {
    mkDir(`./DataBase/${title}`);
    createFolder(title, null, episodios, genero);
  }
}


async function mkDir(file) {
  try {
    fs.mkdir(file,
      {
        recursive: true
      }, (err) => {
        if (err) {
          console.log({
            message: "ocorreu um erro ao criar um novo diretório",
            erro: err
          });
          return;
        }

        console.log("Novo diretório criado com sucesso");
      });
  } catch (error) {
    return console.log(error);
  }
}

async function existSync(folder) {
  try {
    if (fs.existsSync(folder)) {
      console.log('O diretório existe!');
      return true;
    } else {
      console.log('Diretório não encontrado.');
      return false;
    }
  } catch (error) {
    return console.log(error);
  }
}