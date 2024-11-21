import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterOutlet, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {RouterLink} from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCard, MatCardTitle,
   MatCardSubtitle, MatCardContent, MatCardActions} from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ExibicaoHomeComponent } from '../exibicao-home/exibicao-home.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule,
    RouterOutlet,
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
    MatGridListModule,
    MatCard,MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    MatCardModule,
    ExibicaoHomeComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  produtoId: string | null = '';
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
