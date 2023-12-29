import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifesWithTimePage } from './lifes-with-time.page';

const routes: Routes = [
  {
    path: '',
    component: LifesWithTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifesWithTimePageRoutingModule {}
