import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'acerca', loadChildren: './acerca/acerca.module#AcercaPageModule' },
  { path: 'c32', loadChildren: './c32/c32.module#C32PageModule' },
  { path: 'c32r/:epe1/:epe2/:epe3/:eva1/:eva2/:examen/:resultado/:daexamen', loadChildren: './c32r/c32r.module#C32rPageModule' },
  { path: 'c96', loadChildren: './c96/c96.module#C96PageModule' },
  { path: 'c96r/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3/:examen/:resultado/:daexamen', loadChildren: './c96r/c96r.module#C96rPageModule' },
  { path: 'c128', loadChildren: './c128/c128.module#C128PageModule' },
  { path: 'c128r/:epe1/:epe2/:epe3/:ep4/:eva1/:eva2/:eva3/:eva4/:examen/:resultado/:daexamen', loadChildren: './c128r/c128r.module#C128rPageModule' },
  { path: 'c128', loadChildren: './c128/c128.module#C128PageModule' },
  { path: 'c128r', loadChildren: './c128r/c128r.module#C128rPageModule' },
  { path: 'c64', loadChildren: './c64/c64.module#C64PageModule' },
  { path: 'c64r/:epe1/:epe2/:epe3/:eva1/:eva2/:eva3/:examen/:resultado/:daexamen', loadChildren: './c64r/c64r.module#C64rPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
