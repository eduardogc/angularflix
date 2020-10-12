import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { accessKey, baseUrl, channelId } from './api';

@Injectable({
  providedIn: 'root'
})
export class SeriesListService {

  constructor(private httpClient: HttpClient) { }

  private series = [
    {
      title: 'Coberturas Especiais',
      subtitle: 'Os principais eventos do Brasil e do mundo contados pelas nossas lentes',
      imgIconUrl: 'http://localhost:4200/assets/img/CoberturasEspeciais.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/CoberturasEspeciaisBackground.png?hl=pt-BR',
      playlistId: 'PLZVW5Y1Q1B3YjahxKppJcUuYHCCNVDVmh',
      description: 'Acompanhamos os principais eventos do Brasil e do mundo, com reportagens, entrevistas e imagens exclusivas para você saber tudo que acontece! ',
      color: '#0080ff'
    },
    {
      title: 'Alimentação Saudável',
      subtitle: 'Informações práticas para você aplicar e entender como a alimentação faz a diferença na sua saúde',
      imgIconUrl: 'http://localhost:4200/assets/img/AlimentacaoSaudavel.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/AlimentacaoSaudavelBanner.png',
      playlistId: 'PLZVW5Y1Q1B3aod5qN1AMZjwC4dihARiYb',
      description: 'Você já sabe que cuidar da alimentação é importante. Mas se depara com tantas orientações sobre o que é certo e errado, tantas dietas “milagrosas”, que acaba se sentindo meio perdido para dar um primeiro passo. Aqui, você encontra dicas para dar todos os passos em prol da sua saúde!',
      color: '#9654ec'
    },
    {
      title: 'Ciência e Tecnologia',
      subtitle: 'A história da humanidade contada a partir de sua ciência e como as tecnologias podem impactar nossa vida atual',
      imgIconUrl: 'http://localhost:4200/assets/img/CienciaTecnologia.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/CienciaTecnologiaBackground.png',
      playlistId: 'PLZVW5Y1Q1B3Y25N2Jf15is90a-qR6NewO',
      description: 'Tecnologias do passado, presente e futuro pelo olhar de pesquisadores que buscam respostas. Aqui você encontra uma galera que vai muito além dos modismos high tech para propor uma visão mais ampla da ciência ao longo da história da humanidade!',
      color: '#3586A7'
    },
    {
      title: 'História',
      subtitle: 'Fatos além da história contada pelos livros tradicionais para você ampliar sua visão',
      imgIconUrl: 'http://localhost:4200/assets/img/Historia.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/HistoriaBackground.png',
      playlistId: 'PLZVW5Y1Q1B3azymK1TX9bOUp2jGevt21t',
      description: 'Além da história tradicional que aprendemos nos livros escolares, muitos eventos da humanidade ainda estão à margem. Nesse espaço, nossos pesquisadores compartilham novas perspectivas para que você possa refletir!',
      color: '#d5d5d5'
    },
    {
      title: 'Humor',
      subtitle: 'Porque a alegria é a maior frequência do universo',
      imgIconUrl: 'http://localhost:4200/assets/img/Humor.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/HumorBackground.png',
      playlistId: 'PLZVW5Y1Q1B3ZDVrHx_JNFdYhbO9ls6WWC',
      description: 'Leveza e descontração é o que você encontra aqui. Com sátiras do nosso cotidiano, esse espaço é garantia de boas risadas com uma pitadinha de reflexão. Porque a alegria é a maior frequência do universo!',
      color: '#ffe700'
    },
    {
      title: 'Notícias',
      subtitle: 'Uma reflexão constante sobre a nossa sociedade e os rumos do nosso mundo',
      imgIconUrl: 'http://localhost:4200/assets/img/Noticias.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/NoticiasBackground.png',
      playlistId: 'PLZVW5Y1Q1B3YWVcn8u4gLTbHtJs2aLF7_',
      description: 'Notícias que ultrapassam o tempo para nos colocar numa constante reflexão sobre o mundo que nos cerca e os rumos da humanidade. Aqui mostramos o que foi divulgado nos mais diversos canais para trazer a você reflexões e indagações sobre nosso mundo atual.',
      color: '#ff0000'
    },
    {
      title: 'Pensamento Livre',
      subtitle: 'Novas ideias, atitudes e comportamentos  para inquietar sua mente',
      imgIconUrl: 'http://localhost:4200/assets/img/PensamentoLivre.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/PensamentoLivreBackground.png',
      playlistId: 'PLZVW5Y1Q1B3Z26Ueb7D4uBUu5sy7x6p4h',
      description: 'Nossos pesquisadores têm aqui um espaço aberto para provocar reflexões. Sem muito protocolo, este é o local para despertar novas ideias para que você possa ver um mundo e a nossa história sob uma nova perspectiva.',
      color: '#004377'
    },
    {
      title: 'Saúde e Bem-estar',
      subtitle: 'Qualidade de vida e longevidade são protagonistas aqui e você é nosso convidado',
      imgIconUrl: 'http://localhost:4200/assets/img/SaudeBemEstar.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/SaudeBemEstarBackground.png',
      playlistId: 'PLZVW5Y1Q1B3bGFg2IZRVgw3yUh7QECU3U',
      description: 'Sua saúde é uma das chaves para viver mais e melhor. Por isso, dedicamos uma sessão toda especial para estimular reflexões de “como” ter mais saúde! São dicas, entrevistas e treinos físicos para você se cuidar!',
      color: '#80ff00'
    },
    {
      title: 'Viagens',
      subtitle: 'Prepare o seu passaporte e o seu coração para surpreender-se com belos destinos e muito conhecimento',
      imgIconUrl: 'http://localhost:4200/assets/img/Viagem.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/ViagensBackground.png',
      playlistId: 'PLZVW5Y1Q1B3aoVsj0Ny-GrkMji-b7MQNa',
      description: 'Está em busca de um destino instigante para seu próximo passeio? Prepare seu passaporte, sua mente o seu coração para viajar e conhecer não apenas as belezas, mas todo conhecimento que a viagens proporcionam!',
      color: '#ffffff'
    },
    {
      title: 'Entrevistas',
      subtitle: 'Boas conversas, regadas ao conhecimento de pesquisadores que estão fazendo a diferença em suas áreas de atuação',
      imgIconUrl: 'http://localhost:4200/assets/img/Entrevistas.png',
      imgBackgroundUrl: 'http://localhost:4200/assets/img/EntrevistasBackground.png',
      playlistId: 'PLZVW5Y1Q1B3ai2OMnCb4lc3mScE61r1WO',
      description: 'Bate-papo repleto de conteúdo é o que você encontra aqui. Os entrevistados debatem sobre os mais diferentes temas, sem rodeios ou polêmicas, para que você possa conhecer uma nova visão sobre os fenômenos, sejam eles físicos, psíquicos, históricos, religiosos ou sociais.',
      color: '#DBB000'
    }
  ];

  getSeries() {
    return this.shuffle(this.series);
  }

  shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  isPlaylistBlockList(playlistId) {
    const playListArray = [
      'PLZVW5Y1Q1B3YoqXUuGpwPuXqQmeyGIoDl',
      'PLZVW5Y1Q1B3YjahxKppJcUuYHCCNVDVmh',
      'PLZVW5Y1Q1B3aod5qN1AMZjwC4dihARiYb',
      'PLZVW5Y1Q1B3Y25N2Jf15is90a-qR6NewO',
      'PLZVW5Y1Q1B3azymK1TX9bOUp2jGevt21t',
      'PLZVW5Y1Q1B3ZDVrHx_JNFdYhbO9ls6WWC',
      'PLZVW5Y1Q1B3YWVcn8u4gLTbHtJs2aLF7_',
      'PLZVW5Y1Q1B3Z26Ueb7D4uBUu5sy7x6p4h',
      'PLZVW5Y1Q1B3bGFg2IZRVgw3yUh7QECU3U',
      'PLZVW5Y1Q1B3aoVsj0Ny-GrkMji-b7MQNa',
      'PLZVW5Y1Q1B3ai2OMnCb4lc3mScE61r1WO',
      'PLZVW5Y1Q1B3bSshFTwkF_J5oYdE4dO19d'
    ];
    if (playListArray.find(element => element === playlistId) === undefined) {
      return false;
    }
    return true;
  }

  getCategoryInfo(playlistId) {
    return this.series.find(item => item.playlistId === playlistId);
  }

  loadVideos(playlistId) {
    return this.httpClient.get(`${baseUrl}/playlistItems/?part=snippet&channelId=`
                            + `${channelId}&key=${accessKey}&playlistId=${playlistId}&maxResults=50`);
  }

  loadNextPageVideos(playlistId, nextPageToken) {
    return this.httpClient.get(`${baseUrl}/playlistItems/?part=snippet&channelId=`
                            + `${channelId}&key=${accessKey}&playlistId=${playlistId}&maxResults=50`
                            + `&pageToken=${nextPageToken}`);
  }
}
