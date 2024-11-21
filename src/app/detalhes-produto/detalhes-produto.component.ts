import { Component, OnInit, Inject} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
//import { MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import { CurrencyPipe } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CurrencyPipe, 
    CommonModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './detalhes-produto.component.html',
  styleUrl: './detalhes-produto.component.css'
})
export class DetalhesProdutoComponent implements  OnInit{
  produtoId: string | null = null;
  produtoDetalhes: any = null;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
  ) {}


  ngOnInit(): void {
    // Obter o ID do produto da rota
    this.produtoId = this.route.snapshot.paramMap.get('id');//extraindo o produtoid a url

    if (this.produtoId) {
      // Fazer a requisição para buscar os detalhes do produto
      this.http.get(`https://6705366b031fd46a830f1a1a.mockapi.io/table-admin/${this.produtoId}`) //representa o ID do produto especifico que esta seno buscado na api
        .subscribe({
          next: (data) => {
           // console.log('Dados recebidos:', data);
            this.produtoDetalhes = data;
            this.isLoading = false;
          },
          error: (error) => {
            console.error('Erro ao buscar detalhes do produto:', error);
            this.errorMessage = 'Não foi possível carregar os detalhes do produto.';
            this.isLoading = false;
          }
        });
    } else {
      this.errorMessage = 'ID do produto inválido.';
      this.isLoading = false;
    }
  }

  voltar(): void {
    // Navegar de volta para a lista de produtos
    this.router.navigate(['/adicionar-produto']); // Substitua '/produtos' pela rota correta da sua lista de produtos
  }

 /* buscarProdutos(): void {
    this.http.get<any[]>('https://sua-mockapi-url.com/produtos') 
      .subscribe({
        next: (data: any[]) => {
          console.log('Produtos recebidos:', data);
          this.dataSource.data = data;
        },
        error: (error: HttpErrorResponse) => {
          console.error('Erro ao buscar produtos:', error);
          // Opcional: Exiba uma mensagem de erro para o usuário aqui
        }
      });
}*/
}

