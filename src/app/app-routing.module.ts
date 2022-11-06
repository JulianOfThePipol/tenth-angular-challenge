import { LoginGuard } from './core/guards/login.route-guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'credentials',
    loadChildren: () =>
      import('./layouts/credentials-layout/credentials-layout.module').then(
        (mod) => mod.CredentialsLayoutModule
      ),
      data: { animation: 'second'},
    canLoad: [LoginGuard],
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./layouts/main-layout/main-layout.module').then(
        (mod) => mod.MainLayoutModule
      ),
      data: { animation: 'first'}
  },
  { path: '**', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
