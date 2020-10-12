import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'Angularflix-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  redirect(socialNetwork) {
    switch (socialNetwork) {
      case 'facebook':
        window.open('https://www.facebook.com/tvchoficial/', '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/tvch_oficial/', '_blank');
        break;
      case 'youtube':
        window.open('https://www.youtube.com/channel/UCjxN0v57xV-10xsm-uZu1Og', '_blank');
        break;
      default:
        break;
    }
  }

}
