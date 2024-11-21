import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginUsuarioComponent } from './login-usuario/login-usuario.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { InfoProdutosComponent } from './info-produtos/info-produtos.component';
import { ExibicaoHomeComponent } from './exibicao-home/exibicao-home.component';

export const routes: Routes = [
    { path: 'login-usuario', component: LoginUsuarioComponent },
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'adicionar-produto', component: AdicionarProdutoComponent},
    { path: 'admin', component: AdminComponent},
    { path: 'listar-produtos', component: ListarProdutosComponent},
    { path: 'adicionar-produto/listar-produto', component: ListarProdutosComponent},
    { path: 'home/:id', component: HomeComponent },
    { path:  'detalhes-produto/:id', component: DetalhesProdutoComponent},
    { path: '', component: ExibicaoHomeComponent }, // Rota principal com o carrossel
    {path:   'info-produtos/:id', component: InfoProdutosComponent},
    { path: '**', redirectTo: ''}
     
  ];
  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutes { }