import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReleasesComponent } from './releases.component';

export const routes: Routes = [
    {
        path: '',
        component: ReleasesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleasesRoutingModule {}
