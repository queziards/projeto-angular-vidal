import { Component,  ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exibicao-home',
  standalone: true,
  imports: [HomeComponent,
    MatCardTitle,
    MatGridListModule,
    MatCardSubtitle,
    CarouselModule,
    CommonModule,
   NgbModule,

  ],
  templateUrl: './exibicao-home.component.html',
  styleUrl: './exibicao-home.component.css'
 
})
export class ExibicaoHomeComponent {
  @ViewChild('carrosel', { static: false }) carrosel!: ElementRef;

  products = [
    {id: 1, image: 'assets/mochila.png', description: 'Mochila Rodinhas - Infantil', price: 199.90},
    {id: 2, image: 'assets/jaqueta.png',  description:'Jaqueta Puff-Inverno', price: 179.50},
    {id: 3, image: 'assets/garrafa.png', description: 'Garrafa Vidro Milk - TokStock', price: 87.60},
    
  ];
   
  visibleProducts: any[] = [];  // Produtos visíveis no carrossel
  currentIndex = 0;  // Índice atual

  constructor(private router: Router) {
   this.updateVisibleProducts();
  }
  showProducts(productId: number) {
    this.router.navigate(['/info-produtos', productId]);  // Navega para o componente de detalhes com o ID do produto
  }
  updateVisibleProducts() {
    const numVisible = 5; // Número de produtos visíveis ao mesmo tempo
    this.visibleProducts = this.products.slice(
      this.currentIndex,
      this.currentIndex + numVisible
    );
  }

  next() {
    if (this.currentIndex < this.products.length - 3) {
      this.currentIndex++;
      this.updateVisibleProducts();
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateVisibleProducts();
    }
  }
}