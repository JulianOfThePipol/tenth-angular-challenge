import { CredentialsLayoutComponent } from './credentials-layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CredentialsLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../../login/login.module').then((mod) => mod.LoginModule),
      }

    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CredentialsRoutingModule {}
