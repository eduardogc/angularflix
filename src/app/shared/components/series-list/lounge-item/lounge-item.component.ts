import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lounge-item',
  templateUrl: './lounge-item.component.html',
  styleUrls: ['./lounge-item.component.scss']
})
export class LoungeItemComponent implements OnInit {

  @Input() borderColor: string;
  @Input() description: string;
  @Input() playlistId: string;
  @Input() imgIconUrl: string;
  @Input() imgBackgroundUrl: string;
  @Input() title: string;
  @Output() openInfo = new EventEmitter<any>();

  ngOnInit() {
    this.borderColor = `3px solid ${this.borderColor}`;
  }

  openLoungeInfo() {
    const activeLounge = {
      title: this.title,
      description: this.description,
      playlistId: this.playlistId,
      imgIconUrl: this.imgIconUrl,
      imgBackgroundUrl: this.imgBackgroundUrl,
      active: true
    };
    this.openInfo.emit(activeLounge);
  }

}
