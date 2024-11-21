import { Component,ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdicionarProdutoComponent } from './adicionar-produto/adicionar-produto.component';
//angular material
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {RouterModule, Routes } from '@angular/router';
//components 
import {AdminComponent } from "./admin/admin.component";
import {HttpClient } from '@angular/common/http';
import { ListarProdutosComponent } from './listar-produtos/listar-produtos.component';
import { ItemDialogComponent } from './item-dialog/item-dialog.component';
import { DetalhesProdutoComponent } from './detalhes-produto/detalhes-produto.component';
import { InfoProdutosComponent } from './info-produtos/info-produtos.component';
//import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root', 
  standalone: true, 
  imports: [
   
    RouterOutlet,
    HomeComponent,
    AdicionarProdutoComponent,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    //NgbModule,
    CommonModule,
    RouterLink,
    RouterModule,
    AdminComponent,
    ListarProdutosComponent,
    ItemDialogComponent,
    MatDialogModule, 
    MatCardModule,
    DetalhesProdutoComponent,
   // BrowserAnimationsModule,
    CarouselModule,
    InfoProdutosComponent, 
],

  templateUrl: './app.component.html',
  providers: [{ provide: MatDialogRef, useValue: {}}, { provide: MAT_DIALOG_DATA, useValue: {} }, ],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v-ecommerce';
  constructor(private dialog: MatDialog) {}
  openItemDialog(): void {
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: { /* insira os dados aqui, por exemplo, um objeto PeriodicElement */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      // Aqui você pode lidar com o resultado do diálogo, se necessário
      console.log('O diálogo foi fechado com resultado: ', result);
    });
  }
  opened = false;
  images = [
    'assets/front-3.png',
    'assets/front-2.png'
  ];


}



    //MatGridListModule,
 // MatCardModule
 //import {MatGridListModule} from  '@angular/material/grid-list' ;
//import { MatCardModule } from '@angular/material/card';