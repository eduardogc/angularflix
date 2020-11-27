import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { SeriesListService } from '../core/services/series-list.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  categoryInfo: any;
  categoryVideos: any[];
  playlistId: string;

  constructor(private seriesListService: SeriesListService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.playlistId = this.route.snapshot.paramMap.get('playlistId');
    this.loadCategoryInfo();
    this.loadVideos();
  }

  loadCategoryInfo() {
    this.categoryInfo = this.seriesListService.getCategoryInfo(this.playlistId);
  }

  loadVideos() {
    this.seriesListService.loadVideos(this.playlistId).subscribe(response => {
      this.categoryVideos = response['items'].map(item => {
        return {
          playlistId: this.playlistId,
          videoId: item.snippet.resourceId.videoId,
          imgUrl: item.snippet.thumbnails ? item.snippet.thumbnails.medium.url : 'http://localhost:4200/assets/img/no-img.png'
        };
      });
      if (response['nextPageToken']) {
        this.callNextPageVideos(this.playlistId, response['nextPageToken']);
      }
    }, error => {
      console.log(error);
    });
  }

  callNextPageVideos(playlistId, pageToken) {
    this.seriesListService.loadNextPageVideos(playlistId, pageToken).subscribe(response => {
      const nextVideos = response['items'].map(item => {
        return {
          playlistId: 'PLHvLxHvtgDGaknHO6bv0aV4rkcjuoKZM6',
          videoId: item.snippet.resourceId.videoId,
          imgUrl: item.snippet.thumbnails ?
            item.snippet.thumbnails.medium.url :
            'https://storage.googleapis.com/Angularflix-service.appspot.com/no-img.png'
        };
      });
      this.categoryVideos = [...this.categoryVideos, ...nextVideos];
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
