import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MobilesPage } from './mobiles.page';

const routes: Routes = [
  {
    path: '',
    component: MobilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilesPageRoutingModule {}
