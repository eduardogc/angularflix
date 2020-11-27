import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HomeService } from 'src/app/core/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoading = true;
  releases = [];
  subscribeActive = true;
  videos: any;

  constructor(private homeService: HomeService, private router: Router) { }

  ngOnInit() {
    if (!this.hasExpired()) {
      this.subscribeActive = false;
    }
    this.homeService.loadVideosNew().subscribe(response => {
      this.videos = response['data'];
      this.isLoading = false;
    }, error => {
      console.log(error);
    });
  }

  hasExpired() {
    const expiresDateString = localStorage.getItem('hideSubscribeBar');
    if (!expiresDateString) {
      return true;
    }
    const currentDate = new Date().getTime();
    const expiresDate = Date.parse(expiresDateString);
    if (currentDate >= expiresDate) {
      localStorage.removeItem('hideSubscribeBar');
      return true;
    }
    return false;
  }

  redirectWhatsapp() {
    window.open('https://google.com', '_blank');
  }

  redirectMail() {
    this.router.navigate(['/newsletter']);
  }

  hideSubscribe() {
    this.subscribeActive = false;
    const expiresDate = new Date(new Date().getTime() + 60 * 60 * 24 * 1000);
    localStorage.setItem('hideSubscribeBar', expiresDate.toString());
  }
}
