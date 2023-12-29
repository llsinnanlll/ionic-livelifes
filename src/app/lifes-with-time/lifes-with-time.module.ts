import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LifesWithTimePageRoutingModule } from './lifes-with-time-routing.module';

import { LifesWithTimePage } from './lifes-with-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LifesWithTimePageRoutingModule
  ],
  declarations: [LifesWithTimePage]
})
export class LifesWithTimePageModule {}
