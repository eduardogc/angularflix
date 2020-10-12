import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lounge-info',
  templateUrl: './lounge-info.component.html',
  styleUrls: ['./lounge-info.component.scss']
})
export class LoungeInfoComponent implements OnInit {

  @Input() active: boolean;
  @Input() description: string;
  @Input() imgBackgroundUrl: string;
  @Input() playlistId: string;
  @Input() title: string;
  @Output() close = new EventEmitter<any>();

  constructor(private router: Router) {}

  ngOnInit() {
  }

  closeInfo() {
    this.close.emit();
  }

  seeMore() {
    this.router.navigate([`/categoria-detalhe/${this.playlistId}`]);
  }
}
