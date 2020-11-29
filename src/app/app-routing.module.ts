import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () => (await import('./home/home.module')).HomeModule
  },
  // en
  {
    path: 'about-us',
    loadChildren: async () => (await import('./about-us/about-us.module')).AboutUsModule
  },
  {
    path: 'contact',
    loadChildren: async () => (await import('./contact/contact.module')).ContactModule
  },
  {
    path: 'presenters',
    loadChildren: async () => (await import('./presenters/presenters.module')).PresentersModule
  },
  {
    path: 'player/:playlistId/:videoId',
    loadChildren: async () => (await import('./video-player/video-player.module')).VideoPlayerModule
  },
  {
    path: 'player/:videoId',
    loadChildren: async () => (await import('./video-player/video-player.module')).VideoPlayerModule
  },
  {
    path: 'kids',
    loadChildren: async () => (await import('./kids/kids.module')).KidsModule
  },
  {
    path: 'lancamentos',
    loadChildren: async () => (await import('./releases/releases.module')).ReleasesModule
  },
  {
    path: 'categoria-detalhe/:playlistId',
    loadChildren: async () => (await import('./category-detail/category-detail.module')).CategoryDetailModule
  },
  // pt
  {
    path: 'sobre-nos',
    loadChildren: async () => (await import('./about-us/about-us.module')).AboutUsModule
  },
  {
    path: 'contato',
    loadChildren: async () => (await import('./contact/contact.module')).ContactModule
  },
  {
    path: 'apresentadores',
    loadChildren: async () => (await import('./presenters/presenters.module')).PresentersModule
  },
  {
    path: 'player/:videoId',
    loadChildren: async () => (await import('./video-player/video-player.module')).VideoPlayerModule
  },
  {
    path: 'kids',
    loadChildren: async () => (await import('./kids/kids.module')).KidsModule
  },
  {
    path: '**',
    loadChildren: async () => (await import('./not-found/not-found.module')).NotFoundModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
