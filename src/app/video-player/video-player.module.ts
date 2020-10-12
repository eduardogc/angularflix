import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { ShareButtonsModule } from '@ngx-share/buttons';

import { VideoPlayerComponent } from './video-player.component';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons/faTelegramPlane';
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink';

const icons = [
  faFacebookF, faTwitter, faWhatsapp, faFacebookMessenger, faTelegramPlane, faLink
];

// font-awesome workarounds
library.add(...icons);

@NgModule({
  declarations: [
    VideoPlayerComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ShareButtonsModule,
    VideoPlayerRoutingModule
  ]
})
export class VideoPlayerModule { }
