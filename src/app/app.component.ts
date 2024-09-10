import { Component } from '@angular/core';
import { Router, RouterOutlet} from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { MatButtonModule} from '@angular/material/button';
import {NgModule} from '@angular/core'
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import { RouterModule, Routes } from '@angular/router';



@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [
    RouterOutlet,
    TesteComponent,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    FormsModule,
    NgbModule,
    CommonModule,
    RouterLink,
    RouterModule,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'v-ecommerce';
  opened = false;
  images = [
    'assets/front-3.png',
    'assets/front-2.png'
  ];

  imagesWithCaptions = [
    { src: 'assets/teste.png', caption: 'Legenda 1' },
    { src: 'assets/teste.png', caption: 'Legenda 2' },
    { src: 'assets/teste.png', caption: 'Legenda 3' },
    { src: 'assets/teste.png', caption: 'Legenda 4' }
  ];

}



    //MatGridListModule,
 // MatCardModule
 //import {MatGridListModule} from  '@angular/material/grid-list' ;
//import { MatCardModule } from '@angular/material/card';