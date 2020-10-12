import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'angularflix-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() toggle: boolean;
  @Output() close = new EventEmitter<any>();

  activeUrl = '/';

  constructor(private router: Router) { }

  ngOnInit() {}

  redirect(url) {
    this.activeUrl = url;
    this.router.navigate([url]);
    this.close.emit();
  }

  closeSidebar() {
    this.close.emit();
  }

  redirectOuter(url) {
    window.open(url, '_blank');
  }
}
