import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'lifes-no-time',
        loadChildren: () => import('../lifes-no-time/lifes-no-time.module').then(m => m.LifesNoTimePageModule)
      },
      {
        path: 'lifes-with-time',
        loadChildren: () => import('../lifes-with-time/lifes-with-time.module').then(m => m.LifesWithTimePageModule)
      },
      {
        path: 'options',
        loadChildren: () => import('../options/options.module').then(m => m.OptionsPageModule)
      },
      {
        path: '',
        redirectTo: '/lifes-no-time',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/lifes-no-time',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
