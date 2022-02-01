// const funcoes = require("./Funcoes");

// funcoes.save();
// funcoes.load(arquivoJSON exemplo: '../JSON/lista_de_videos.json');
// funcoes.directory('./public/mp4','./JSON/lista_de_videos.json');
// funcoes.listar('./JSON/lista_de_videos.json');
// funcoes.readJson('./public/json');
// funcoes.readFileXML('http://saranimemania.epizy.com/videos/latest/rss', 'true');
//funcoes.QRCD({ key: 'sar.anime.mania@gmail.com', amount: 'R$1.00', name: 'Ygor de Souza Zanotti', reference: '', key_type: 'email', city: 'Andradina-SP' });


const fs = require('fs');
const xml2js = require('xml2js');
const request = require('request');
const util = require('util');
const parser = new xml2js.Parser();
const BrCode = require('./lib/br_code.js');
const QRCode = require('qrcode');
const path = require('path');

let data = {}, aux = 0;

let QR_CODE_SIZE = 400;

exports.save = (content) => {
  try {
  let contentFilePath = content.caminho;
  let files = content.conteudo;
  const contentString = JSON.stringify(files, null, 2);
  return fs.writeFileSync(contentFilePath, contentString);
  } catch (error) {
    return console.log({ error: error });
  }
}
exports.load = (content) => {
  try {
  let contentFilePath = content;
  const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8');
  const contentJson = JSON.parse(fileBuffer);
  return contentJson;
  } catch (error) {
    return console.log({ error: error });
  }
}

exports.directory = (directory, caminho) => {
  try {
  fs.readdir(directory, (err, files) => {
    if (err) {
      console.log(err.message);
    } else {
      save({
        content: files,
        caminho: caminho
      });
    }
  });
  } catch (error) {
    return console.log({ error: error });
  }
}

exports.createUrl = async (arquivos) => {
  let listadearquivos = await fs.promises.readdir(arquivos);
  data = [];
  listadearquivos.forEach(file => {
    filelist = { 'name': file, 'link': 'https://ejs.sardinhacn.repl.co/' + file };
    data.push(filelist);
    save(data);
  })
}

exports.readJson = (directory) => {
  let videoDirectory = directory;
  let dirBuf = Buffer.from(videoDirectory);

  fs.readdir(dirBuf, (err, files) => {
    if (err) {
      console.log(err.message);
    } else {
      let fileRead = directory + files[0];
      fs.readFile(fileRead, 'utf8', (err, fileContent) => {
        if (err) {
          console.log(err.message);
        } else {
          fs.readFile(fileContent, 'utf8', (err, fileContent) => {
            if (err) {
              console.log(err.message);
            } else {
              let data = JSON.parse(fileContent.toString());
              console.log(data);
            }
          });
        }
      });
    }
  });
}


exports.readFileXML = (file) => {
  let v = file.includes("http");
  console.info(v)
  if (v) {
    console.info('Modo Online')
    request(file, (error, response, body) => {
      if (error) {
        let erro = `${error}`,
          data = {
            local: 'Erro foi no Request',
            error: erro,
            response: response,
            body: body
          }
        saveJson('Request', './Erro-console-log.json', data);
        loadJson('./Erro-console-log.json');
      } else {
        parser.parseString(body, (err, result) => {
          if (err) {
            let erro = `${err}`,
              data = {
                local: 'Erro foi no Parser',
                error: erro,
                response: response,
                body: body
              }
            saveJson('Parser', './Erro-console-log.json', data);
            loadJson('./Erro-console-log.json');
          } else {
            console.log(util.inspect(result, false, null, true));
          }
        });
      }
    });
  } else {
    console.info('Modo Offline');
    fs.readFile(file, (err, data) => {
      if (err) {
        if (data == 'undefined') {
          let erro = `${err}`,
            file = {
              local: 'Erro foi no readFile',
              err: erro,
              data: data
            }
          saveJson('readFile', './Erro-console-log.json', file);
          loadJson('./Erro-console-log.json');
        } else {
          let erro = `${err}`,
            file = {
              local: 'Erro foi no readFile',
              err: erro,
              data: 'undefined'
            }
          saveJson('readFile', './Erro-console-log.json', file);
          loadJson('./Erro-console-log.json');
        }
      } else {
        parser.parseString(data, (err, result) => {
          if (err) {
            let erro = `${err}`,
              data = {
                local: 'Erro foi no Parser do readFile',
                err: erro,
                data: data
              }
            saveJson('Parser do readFile', './Erro-console-log.json', data);
            loadJson('./Erro-console-log.json');
          } else {
            console.info(util.inspect(result, false, null, true));
          }
        });
      }
    });
  }
}

exports.saveJson = (local, path, files) => {
  const contentString = JSON.stringify(files, null, 2);
  fs.writeFileSync(path, contentString);
  console.info(`Erro no ${local}, Foi salvo no aquivo json`);
}

exports.loadJson = (content) => {
  let contentFilePath = content;
  const fileBuffer = fs.readFileSync(contentFilePath, 'utf-8');
  const contentJson = JSON.parse(fileBuffer);
  console.info(contentJson);
}

exports.SplitYouTube = async (url) => {
  try {
    let yt = url.split('/'),

      trailer = `https://www.youtube.com/embed/${yt[3]}?rel=0&autoplay=1`;
    return trailer;
  } catch (error) {
    return console.log({
      message: `Falha ao tendar contruir url embed!`,
      erro: `${error}`
    });
  }
}

exports.ListarArquivos = (base) => {
  let pastas = fs.readdirSync(base);
  for (p in pastas) {
    let caminho = path.join(base, pastas[p]),
      stats = fs.lstatSync(caminho);

    if (stats.isDirectory()) {
      listarArquivos(caminho);
    } else {
      data[aux] = {
        nome: path.basename(caminho),
        caminho: caminho,
        tamanho: stats.size + ' Bytes',
        tipo: path.extname(caminho)
      };
      aux += 1;
    }
  }
}