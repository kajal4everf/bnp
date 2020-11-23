import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobileModalPage } from './mobile-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MobileModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobileModalPageRoutingModule {}
