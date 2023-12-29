import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifesNoTimePage } from './lifes-no-time.page';

const routes: Routes = [
  {
    path: '',
    component: LifesNoTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifesNoTimePageRoutingModule {}
