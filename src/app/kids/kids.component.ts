import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { KidsService } from '../core/services/kids.service';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.scss']
})
export class KidsComponent implements OnInit {

  kidsPlaylists: [];
  kidsVideos: any[];

  constructor(private kidsService: KidsService, private router: Router) { }

  ngOnInit() {
    this.kidsService.loadPlaylists().subscribe(response => {
      this.kidsPlaylists = response['items'];
      this.kidsPlaylists.map(videoItem => {
        this.loadVideos(videoItem['id']);
      });
    }, error => {
      console.log(error);
    });
  }

  loadVideos(playlistId) {
    this.kidsService.loadVideos(playlistId).subscribe(response => {
      this.kidsVideos = response['items'].map(item => {
        return {
          playlistId: playlistId,
          videoId: item.snippet.resourceId.videoId,
          imgUrl: item.snippet.thumbnails ?
            item.snippet.thumbnails.medium.url :
            'https://storage.googleapis.com/Angularflix-service.appspot.com/no-img.png'
        };
      });
      if (response['nextPageToken']) {
        this.callNextPageVideos(playlistId, response['nextPageToken']);
      }
    }, error => {
      console.log(error);
    });
  }

  callNextPageVideos(playlistId, pageToken) {
    this.kidsService.loadNextPageVideos(playlistId, pageToken).subscribe(response => {
      const nextVideos = response['items'].map(item => {
        return {
          playlistId: 'PLHvLxHvtgDGaknHO6bv0aV4rkcjuoKZM6',
          videoId: item.snippet.resourceId.videoId,
          imgUrl: item.snippet.thumbnails ?
            item.snippet.thumbnails.medium.url :
            'https://storage.googleapis.com/Angularflix-service.appspot.com/no-img.png'
        };
      });
      this.kidsVideos = [...this.kidsVideos, ...nextVideos];
      if (response['nextPageToken']) {
        this.callNextPageVideos(playlistId, response['nextPageToken']);
      }
    }, error => {
      console.log(error);
    });
  }

  redirectTo(videoId, playlistId) {
    this.router.navigate([`/player/${playlistId}/${videoId}`]);
  }

}
