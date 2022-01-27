let data = require('./data.json');

let data1 = JSON.stringify(data), obj = JSON.parse(data1);

let anime = obj.Anime[0].UrlEpisodios

console.log(anime);


//https://api.sardinhacn.repl.co/data




/*

      {
        "id": 14,
        "Pesquisa": "Planet Survival",
        "Titulo_do_anime": "Planet Survival – Todos os Episódios",
        "Capa_do_Anime": "https://www.anitube.site/wp-content/uploads/Planet-Survival.jpg",
        "Banner_do_Anime": "https://encrypted-tbn0.gstatic.com/images?q\u003dtbn%3AANd9GcSpYLV68JOhu3bfsXwyU_AMjrnvpWii8Zfyrr4pKFWdB3ZnsD80",
        "Trailer_do_Anime": "https://www.youtube.com/embed/laEJs9TJ-D8?rel\u003d0\u0026autoplay\u003d1",
        "UrlEpisodios": {
          "Legendado": [
            "https://animefire.net/video/grancrest-senki/1",
            "https://animefire.net/video/grancrest-senki/2",
            "https://animefire.net/video/grancrest-senki/3",
            "https://animefire.net/video/grancrest-senki/4",
            "https://animefire.net/video/grancrest-senki/5",
            "https://animefire.net/video/grancrest-senki/6",
            "https://animefire.net/video/grancrest-senki/7",
            "https://animefire.net/video/grancrest-senki/8",
            "https://animefire.net/video/grancrest-senki/9",
            "https://animefire.net/video/grancrest-senki/10",
          ],
          "Dublado": [],
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
            "Episódio 26",
            "Episódio 27",
            "Episódio 28",
            "Episódio 29",
            "Episódio 20",
            "Episódio 31",
            "Episódio 32",
            "Episódio 33",
            "Episódio 34",
            "Episódio 35",
            "Episódio 36",
            "Episódio 37",
            "Episódio 38",
            "Episódio 39",
            "Episódio 30",
            "Episódio 41",
            "Episódio 42",
            "Episódio 43",
            "Episódio 44",
            "Episódio 45",
            "Episódio 46",
            "Episódio 47",
            "Episódio 48",
            "Episódio 49",
            "Episódio 50",
            "Episódio 51",
            "Episódio 52"
          ],
          "EpLegendado": false,
          "EpDublado": false
        },
        "Formato": "Anime",
        "Genero": ["Ação", "Aventura", "Fantasia", "Ficção Científica", "Slice Of Life"],
        "Autor": "Yuuichirou Yano e Yuka Yamada",
        "Diretor": "Yuuichirou Yano",
        "Estudio": "Madhouse, Telecom Animation Film",
        "Tipo_de_Episodio": "Dublado Pt-Br",
        "Episodios": 52,
        "Ovas": 0,
        "Filmes": 0,
        "Anime_Para": "Assistir Online",
        "Ano": 2003,
        "Dialog_Titulo": "Planet Survival",
        "Sinopse": "Planet Survival se passa no século XXII e conta a história sobre 7 estudantes e 1 gata robô. Luna, Sharla, Menoli, Howard, Bell, Shingo, Kaoru e Chako estão em uma era onde os humanos vivem em colônias espaciais e têm uma tecnologia muito avançada, mas a natureza agora só existe nos livros. Um certo dia a escola destes estudantes decide fazer uma excursão ao espaço, mas acabam acontecendo imprevistos e estes acabam por parar em um planeta desconhecido e belo, repleto de perigos. Agora, eles precisam fazer de tudo para sobreviver e voltar para a colônia. Alguns segredos marcantes serão revelados no decorrer da trama, como o passado do planeta.",
        "Lancamento_Controle": "Não",
        "Dia_do_Lancamento": "TEXTO"
      },

*/