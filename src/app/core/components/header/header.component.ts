import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'Angularflix-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  activeUrl = '/';
  selectedLang: string;
  sidebarToggle = false;

  constructor(private translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'es', 'fr', 'pt']);
    this.selectedLang = translate.getBrowserLang();
    translate.use(this.selectedLang.match(/en|es|pt|fr/) ? this.selectedLang : 'en');
  }

  useLanguage() {
    this.translate.use(this.selectedLang);
  }

  toggleSidebar() {
    this.sidebarToggle = !this.sidebarToggle;
  }

  closeSidebar() {
    this.sidebarToggle = false;
  }

  redirect(url) {
    this.activeUrl = url;
    this.router.navigate([url]);
  }

  redirectOuter(url) {
    window.open(url, '_blank');
  }
}
