import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MobileModalPageRoutingModule } from './mobile-modal-routing.module';

import { MobileModalPage } from './mobile-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MobileModalPageRoutingModule
  ],
  declarations: [MobileModalPage]
})
export class MobileModalPageModule {}
