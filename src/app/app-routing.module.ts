import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  // en
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'presenters',
    loadChildren: () => import('./presenters/presenters.module').then(m => m.PresentersModule)
  },
  {
    path: 'player/:playlistId/:videoId',
    loadChildren: () => import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
  },
  {
    path: 'player/:videoId',
    loadChildren: () => import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)
  },
  {
    path: 'lancamentos',
    loadChildren: () => import('./releases/releases.module').then(m => m.ReleasesModule)
  },
  {
    path: 'categoria-detalhe/:playlistId',
    loadChildren: () => import('./category-detail/category-detail.module').then(m => m.CategoryDetailModule)
  },
  // pt
  {
    path: 'sobre-nos',
    loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'apresentadores',
    loadChildren: () => import('./presenters/presenters.module').then(m => m.PresentersModule)
  },
  {
    path: 'player/:videoId',
    loadChildren: () => import('./video-player/video-player.module').then(m => m.VideoPlayerModule)
  },
  {
    path: 'kids',
    loadChildren: () => import('./kids/kids.module').then(m => m.KidsModule)
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
