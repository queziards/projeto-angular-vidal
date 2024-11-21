import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExibicaoHomeComponent } from "../exibicao-home/exibicao-home.component";
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-produtos',
  standalone: true,
  imports: [CommonModule, 
    ExibicaoHomeComponent,
    FormsModule,
  ],
  templateUrl: './info-produtos.component.html',
  styleUrl: './info-produtos.component.css'
})
export class InfoProdutosComponent implements OnInit{
  private apiUrl = 'https://6705366b031fd46a830f1a1a.mockapi.io/table-admin';
  product: any;
  quantity=1;
  products =[
  {id: 1, image: 'assets/mochila.png', description: 'Mochila Rodinhas', price: 199.90},
  {id: 2, image: 'assets/jaqueta.png',  description:'Jaqueta Puff-Inverno', price: 179.50},
  {id: 3, image: 'assets/garrafa.png', description: 'Garrafa Vidro Milk - TokStock', price: 87.60},
 ];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
    ) {}
    
  ngOnInit() {
    //TODO: consumir a api de produtos
    //TODO: popular dados do produto 
    // Obter o ID do produto da rota e encontrar o produto

    const idParam = this.route.snapshot.paramMap.get('id');  //com o ID É usado para capturar qual produto será manipulado.
    const productId = idParam ? parseInt(idParam, 10) : 0;  // Converte o ID em número //: Converte o parâmetro capturado (que vem como string) em um número inteiro.

    this.product = this.products.find(p => p.id === productId); //Busca um produto na lista local this.products que tenha o mesmo ID (productId).
    this.http.get(`${this.apiUrl}/${productId}`).subscribe(
      (data) => {  // Representa os dados retornados pela API.
       
      },
      (error) => {  //Captura erros na requisição e os exibe no console.
        console.error('Erro ao buscar o produto:', error);

      }
    )
  }


  /***************************************************************************************************** */
   ///aumentar ou diminuir quantidade de produtos do carrinho
  increaseQuantity() {
    this.quantity++;
  }

  // Função para diminuir a quantidade
  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  // Função para simular a compra do produto
  buyProduct() { //botao comprar 
    console.log(`Comprou ${this.quantity} unidade(s) do produto:`, this.product); 
    //Mostra no console uma mensagem simulando a compra do produto, indicando a quantidade
   
  }
}


// this.product = { ...this.product, ...data }; //linha45