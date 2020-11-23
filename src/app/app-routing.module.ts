import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'vehicles',
    loadChildren: () => import('./vehicles/vehicles.module').then( m => m.VehiclesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mobiles',
    loadChildren: () => import('./mobiles/mobiles.module').then( m => m.MobilesPageModule),
    canActivate: [AuthGuardService]
  },
  {
    path: 'mobile-modal',
    loadChildren: () => import('./modal/mobile-modal/mobile-modal.module').then( m => m.MobileModalPageModule)
  },
  {
    path: 'vehicle-modal',
    loadChildren: () => import('./modal/vehicle-modal/vehicle-modal.module').then( m => m.VehicleModalPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
