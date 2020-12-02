import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

import { PlayerService } from '../core/services/player.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {

  description: any;
  descriptionToggle = true;
  counter = 0;
  musics: string;
  playlistName: string;
  processedDescription: any;
  relatedVideos: any;
  researchContent: string;
  script: string;
  technicalSheet: string;
  title: string;
  youtubeIframe: SafeHtml;
  videoUrl: SafeResourceUrl;
  whereFindUs: any;
  playlistId: string;
  shareUrl: SafeResourceUrl;

  constructor(private route: ActivatedRoute, private domSanitizer: DomSanitizer, private playerService: PlayerService) { }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.playlistId = this.route.snapshot.paramMap.get('playlistId');
    const videoId = this.route.snapshot.paramMap.get('videoId');
    const videoUrlString = `https://www.youtube.com/embed/${videoId}?autoplay=0&rel=1&origin=http://Angularflix.com.br`;
    const youtubeHtml = this.getTranslationForTemplate(videoUrlString);
    this.youtubeIframe = this.domSanitizer.bypassSecurityTrustHtml(youtubeHtml);
    this.videoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(videoUrlString);
    this.loadVideoInfo();
    this.loadRelatedVideos(videoId);
    this.shareUrl = `https://tvch.com.br`;
    if (this.playlistId) {
      this.getPlaylistName(this.playlistId);
    }
    if (this.isMobile()) {
      this.descriptionToggle = false;
    }
  }

  getTranslationForTemplate(videoUrlString) {
    const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    const configAllow = `accelerometer; encrypted-media; gyroscope; picture-in-picture`;
    if (width > 570) {
      return `<iframe width="560" height="315"
              src="${videoUrlString}" frameborder="0"
              allow=${configAllow} allowfullscreen></iframe>`;
    } else {
      return `<iframe width="320" height="180"
              src="${videoUrlString}" frameborder="0"
              allow=${configAllow} allowfullscreen></iframe>`;
    }
  }

  loadVideoInfo() {
    this.playerService.loadVideoInfo()
      .subscribe(result => {
        const snippet = result['data'].items[0].snippet;
        this.title = snippet.title.split(' - T')[0];
        this.processedDescription = this.urlify(snippet.description);
        this.description = this.domSanitizer.bypassSecurityTrustHtml(this.processedDescription);
      }, error => {
        console.log(error);
      });
  }

  loadRelatedVideos(videoId) {
    this.playerService.getRelatedVideos(videoId)
      .subscribe(response => {
        this.sanitizeResponse(response, videoId);
      }, error => {
        console.log(error);
      });
  }

  getPlaylistName(playlistId) {
    this.playerService.getPlaylistName(playlistId)
      .subscribe(result => {
        this.playlistName = result['items'][0].snippet.title;
        const isNum = /^\d+$/.test(this.playlistName.substr(0, 2));
        if (isNum) {
          this.playlistName = this.playlistName.slice(3, this.playlistName.length);
        }
      }, error => {
        console.log(error);
      });
  }

  formatDescription(description) {
    return description.slice(0, description.indexOf('====Onde '));
  }

  formatWhereFindUs(description) {
    return description.slice(description.indexOf('====Onde '), description.indexOf('==== Ficha'));
  }

  formatTechnicalSheet(description) {
    return description.slice(description.indexOf('==== Ficha '), description.indexOf('Roteiro,'));
  }

  formatScript(description) {
    if (description.indexOf('Pesquisa e ') > -1) {
      return description.slice(description.indexOf('Roteiro,'), description.indexOf('Pesquisa e '));
    } else {
      return description.slice(description.indexOf('Roteiro,'), description.indexOf('Conteúdo e '));
    }
  }

  formatResearchContent(description) {
    if (description.indexOf('Pesquisa e ') > -1) {
      return description.slice(description.indexOf('Pesquisa e '), description.indexOf('Música'));
    } else {
      return description.slice(description.indexOf('Conteúdo e '), description.indexOf('Música'));
    }
  }

  formatMusic(description) {
    return description.slice(description.indexOf('Música'), description.length);
  }

  toggleDescription() {
    this.descriptionToggle = !this.descriptionToggle;
  }

  isMobile() {
    let check = false;
    // tslint:disable-next-line: max-line-length
    const mobileRegex1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;

    // tslint:disable-next-line: max-line-length
    const mobileRegex2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;
    (function (a) {
      if (mobileRegex1.test(a) || mobileRegex2.test(a.substr(0, 4))) {
        check = true;
      }
    })(navigator.userAgent || navigator.vendor);
    return check;
  }

  urlify(text) {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function (url) {
      return `<a class="video-description-link" href="${url}" target="_blank">${url}</a>`;
    });
  }

  sanitizeResponse(response, videoId) {
    this.relatedVideos = response['items'].filter(item => {
      if (item.snippet.channelId !== 'UCjxN0v57xV-10xsm-uZu1Og') {
        return false;
      } else {
        return true;
      }
    }).map(item => {
      return {
        videoId: item.id.videoId,
        imgUrl: item.snippet.thumbnails ?
          item.snippet.thumbnails.medium.url :
          'https://storage.googleapis.com/Angularflix-service.appspot.com/no-img.png'
      };
    });
    // try 3 times to get related videos on pages
    this.counter++;
    if (this.relatedVideos.length < 5 && this.counter < 3) {
      this.callNextPageRelatedVideos(response['nextPageToken'], videoId);
    }
  }

  callNextPageRelatedVideos(pageToken, videoId) {
    this.playerService.nextPageRelatedVideos(pageToken, videoId).subscribe(response => {
      this.sanitizeAndConcatResponse(response, videoId);
    }, error => {
      console.log(error);
    });
  }

  sanitizeAndConcatResponse(response, videoId) {
    const sanitizedResponse = response['items'].filter(item => {
      if (item.snippet.channelId !== 'UCjxN0v57xV-10xsm-uZu1Og') {
        return false;
      } else {
        return true;
      }
    }).map(item => {
      return {
        videoId: item.id.videoId,
        imgUrl: item.snippet.thumbnails ?
          item.snippet.thumbnails.medium.url :
          'https://storage.googleapis.com/Angularflix-service.appspot.com/no-img.png'
      };
    });
    this.relatedVideos = [...this.relatedVideos, ...sanitizedResponse];
    // try 3 times to get related videos on pages.
    // if the array gets more than 5 elements, it gets the first 5 more relevants.
    this.counter++;
    if (this.relatedVideos.length < 5 && this.counter < 3) {
      this.callNextPageRelatedVideos(response['nextPageToken'], videoId);
    } else if (this.relatedVideos.length > 5) {
      this.relatedVideos = this.relatedVideos.slice(0, 5);
    }
  }

}
