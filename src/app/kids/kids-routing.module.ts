import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KidsComponent } from './kids.component';

export const routes: Routes = [
    {
        path: '',
        component: KidsComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KidsRoutingModule {}
