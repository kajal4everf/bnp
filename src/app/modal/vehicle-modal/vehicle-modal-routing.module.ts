import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehicleModalPage } from './vehicle-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VehicleModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehicleModalPageRoutingModule {}
