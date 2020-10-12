import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryDetailComponent } from './category-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: CategoryDetailComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryDetailRoutingModule {}
