import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  // en
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'presenters', loadChildren: './presenters/presenters.module#PresentersModule' },
  { path: 'player/:playlistId/:videoId', loadChildren: './video-player/video-player.module#VideoPlayerModule' },
  { path: 'player/:videoId', loadChildren: './video-player/video-player.module#VideoPlayerModule' },
  { path: 'kids', loadChildren: './kids/kids.module#KidsModule' },
  { path: 'lancamentos', loadChildren: './releases/releases.module#ReleasesModule' },
  { path: 'categoria-detalhe/:playlistId', loadChildren: './category-detail/category-detail.module#CategoryDetailModule' },
  // pt
  { path: 'sobre-nos', loadChildren: './about-us/about-us.module#AboutUsModule' },
  { path: 'contato', loadChildren: './contact/contact.module#ContactModule' },
  { path: 'apresentadores', loadChildren: './presenters/presenters.module#PresentersModule' },
  { path: 'player/:videoId', loadChildren: './video-player/video-player.module#VideoPlayerModule' },
  { path: 'kids', loadChildren: './kids/kids.module#KidsModule' },
  { path: '**', loadChildren: './not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
