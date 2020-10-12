import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PresentersComponent } from './presenters.component';

export const routes: Routes = [
    {
        path: '',
        component: PresentersComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentersRoutingModule {}
