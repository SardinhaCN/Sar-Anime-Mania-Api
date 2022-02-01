const fs = require("fs");

const funcoes = require("./Funcoes");

let data = funcoes.load('./d0b.json');

let data1 = JSON.stringify(data),
obj = JSON.parse(data1);

let anime = obj,
title = obj.Pesquisa,
episodios = obj.UrlEpisodios,
genero = obj.Genero;


let animeInfo = {
  
}





/*funcoes.save({
  conteudo: episodios,
  caminho: `./DataBase/${title}/Episodios.json`
  });*/
funcoes.save({
  conteudo: episodios,
  caminho: `./DataBase/${title}/Episodios.json`
  });
funcoes.save({
  conteudo: genero,
  caminho: `./DataBase/${title}/genero.json`
  });


const
fs.mkdir('./pDirectory/folder1/childFolder',
{
recursive: true
}, (err) => {
if (err) {
console.log("error occurred in creating new directory", err);
return;
}

console.log("New directory created successfully");
});
