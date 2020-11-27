import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit, AfterViewInit {

  @Input() data: any;
  @Input() playlistId?: any;

  hoverList = false;
  leftScrollable = false;
  scrollOffset = 0;
  shown = 'native';
  isTouch = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.isTouch = this.isTouchDevice();
  }

  ngAfterViewInit() {
    setTimeout(() => this.toggleHover(), 1000);
  }

  moveLeft(elementId) {
    if (this.scrollOffset > 0) {
      this.smoothHorizontalScrolling(document.getElementById(elementId), 333, -727, this.scrollOffset);
      this.scrollOffset -= 727;
      if (this.scrollOffset === 0) {
        this.leftScrollable = false;
      }
    } else {
      this.scrollOffset = 0;
      this.leftScrollable = false;
    }
  }

  moveRight(elementId) {
    this.smoothHorizontalScrolling(document.getElementById(elementId), 333, 727, this.scrollOffset);
    this.scrollOffset += 727;
    this.leftScrollable = true;
  }

  toggleHover() {
    const element = document.getElementById(this.playlistId);
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
