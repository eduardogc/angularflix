import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ReleasesService } from '../core/services/releases.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  kidsVideos: any[];

  constructor(private releasesService: ReleasesService, private router: Router) { }

  ngOnInit() {
    this.releasesService.loadReleases().subscribe(response => {
      this.kidsVideos = response['items'].map(item => {
        return {
          videoId: item.id.videoId,
          imgUrl: item.snippet.thumbnails ? item.snippet.thumbnails.medium.url : 'http://localhost:4200/assets/img/no-img.png'
        };
      });
    }, error => {
      console.log(error);
    });
  }

  redirectTo(videoId) {
    this.router.navigate([`/player/${videoId}`]);
  }

}
