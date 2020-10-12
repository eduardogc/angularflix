import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VideoPlayerComponent } from './video-player.component';

export const routes: Routes = [
    {
        path: '',
        component: VideoPlayerComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoPlayerRoutingModule {}
