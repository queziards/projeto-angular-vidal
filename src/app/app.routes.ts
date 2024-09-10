import { Routes, RouterModule, RouterLink } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';

export const routes: Routes = [
    { path: 'login-usuario', component: LoginUsuarioComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes), RouterLink],
    exports: [RouterModule]
  })
  export class AppRoutes { }