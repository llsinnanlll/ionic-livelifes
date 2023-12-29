import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifesNoTimePageRoutingModule } from './lifes-no-time-routing.module';

import { LifesNoTimePage } from './lifes-no-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifesNoTimePageRoutingModule
  ],
  declarations: [LifesNoTimePage]
})
export class LifesNoTimePageModule {}
