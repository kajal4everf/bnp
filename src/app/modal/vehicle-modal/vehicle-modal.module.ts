import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehicleModalPageRoutingModule } from './vehicle-modal-routing.module';

import { VehicleModalPage } from './vehicle-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehicleModalPageRoutingModule
  ],
  declarations: [VehicleModalPage]
})
export class VehicleModalPageModule {}
