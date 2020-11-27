import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesListService } from 'src/app/core/services/series-list.service';

@Component({
  selector: 'series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit, AfterViewInit {

  @Input() data: any;

  hoverList = false;
  leftScrollable = false;
  scrollOffset = 0;
  shown = 'native';
  isTouch = false;
  activeLounge = {
    active: false,
    title: '',
    playlistId: '',
    description: '',
    imgBackgroundUrl: ''
  };
  seriesList: any;

  constructor(private router: Router, private seriesListService: SeriesListService) { }

  ngOnInit() {
    this.isTouch = this.isTouchDevice();
    this.seriesList = this.seriesListService.getSeries();
  }

  ngAfterViewInit() {
    setTimeout(() => this.toggleHover(), 1000);
  }

  setActiveLounge(loungeInfoData) {
    if (this.activeLounge.active) {
      if (this.activeLounge.title === loungeInfoData.title) {
        this.activeLounge.active = false;
      } else {
        this.activeLounge = loungeInfoData;
      }
    } else {
      this.activeLounge = loungeInfoData;
    }
  }

  moveLeft() {
    if (this.scrollOffset > 0) {
      this.smoothHorizontalScrolling(document.getElementById('series-list-Angularflix'), 333, -727, this.scrollOffset);
      this.scrollOffset -= 727;
      if (this.scrollOffset === 0) {
        this.leftScrollable = false;
      }
    } else {
      this.scrollOffset = 0;
      this.leftScrollable = false;
    }
  }

  moveRight() {
    this.smoothHorizontalScrolling(document.getElementById('series-list-Angularflix'), 333, 727, this.scrollOffset);
    this.scrollOffset += 727;
    this.leftScrollable = true;
  }

  toggleHover() {
    const element = document.getElementById('series-list-Angularflix');
    const hasHorizontalScrollbar = element.scrollWidth > element.clientWidth;
    if (hasHorizontalScrollbar) {
      this.hoverList = true;
    }
  }

  redirectTo(videoId, playlistId) {
    if (!playlistId) {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate([`/player/${videoId}`]));
    } else {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() =>
        this.router.navigate([`/player/${playlistId}/${videoId}`]));
    }
  }

  closeInfo() {
    this.activeLounge.active = false;
  }

  seeMore(loungeInfoData) {
    this.router.navigate([`/categoria-detalhe/${loungeInfoData.playlistId}`]);
  }

  isTouchDevice() {
    try {
      document.createEvent('TouchEvent');
      return true;
    } catch (e) {
      return false;
    }
  }

  smoothHorizontalScrolling(e, time, amount, start) {
    const eAmt = amount / 100;
    let curTime = 0;
    let scrollCounter = 0;
    while (curTime <= time) {
      window.setTimeout(this.SHS_B, curTime, e, scrollCounter, eAmt, start);
      curTime += time / 100;
      scrollCounter++;
    }
  }

  SHS_B(e, sc, eAmt, start) {
    e.scrollLeft = (eAmt * sc) + start;
  }

}
