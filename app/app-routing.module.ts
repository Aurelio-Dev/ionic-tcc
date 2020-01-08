import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', canActivate: [AuthGuard] },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule',  canActivate: [AuthGuard]
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'boletim', loadChildren: './boletim/boletim.module#BoletimPageModule',  canActivate: [AuthGuard]},
  { path: 'historico', loadChildren: './historico/historico.module#HistoricoPageModule', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
