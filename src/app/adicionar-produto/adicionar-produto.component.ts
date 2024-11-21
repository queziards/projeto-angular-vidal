import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarRow } from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs' ;
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select' ;
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

//componentes
import { PeriodicElement } from '../models/PeriodicElement';
import { PeriodicElementService } from '../services/periodicElements';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { DetalhesProdutoComponent } from '../detalhes-produto/detalhes-produto.component';
//material 
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-adicionar-produto',
  standalone: true,
  imports: [MatToolbar, 
    MatIcon, 
    MatButtonModule, 
    MatToolbarRow,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatFormField,
    MatInputModule,
    MatSelectModule,
    MatPaginator,  
    MatTable, 
    MatTableModule,
    DetalhesProdutoComponent,
  ],
  templateUrl: './adicionar-produto.component.html',
  styleUrl: './adicionar-produto.component.css'
})
export class AdicionarProdutoComponent implements OnInit{
  @ViewChild(MatTable)
  table!:MatTable<any>;
  displayedColumns: string[] = ['position','nome', 'descricao', 'preco','qtde', 'actions'];
  dataSource!: PeriodicElement[];
  
   constructor(
    private router: Router,
    public dialog: MatDialog,
    public periodicElementService: PeriodicElementService
  ){
    this.periodicElementService.getElements()
    .subscribe((data:PeriodicElement[])=> {
      //console.log(data);
      this.dataSource=data; //chamda http 
    });
  }
  ngOnInit(): void {
      
  }

  openDialog(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: element === null ? {
      position: null, //se ele for n ulo passa vazio
      nome: '',      //se nao for null passa o element
      descricao: null,
      preco: '',
      qtde: ''
     } : {
      id: element.id,
      position: element.position, //se ele for n ulo passa vazio
      nome: element.nome,      //se nao for null passa o element
      descricao: element.descricao,
      preco: element.preco,
      qtde: element.qtde
     }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        //console.log(result);
        if(this.dataSource.map(p => p.id).includes(result.id)){
          this.periodicElementService.editElement(result)
          .subscribe((data:PeriodicElement)=> {
            const index = this.dataSource.findIndex(p => p.id === data.id);
            this.dataSource[index] = data; 
            this.table.renderRows(); 
          });
      
        } else {
          this.periodicElementService.createElements(result)
          .subscribe((data: PeriodicElement)=> {
            this.dataSource.push(data);
            this.table.renderRows();
          });
       }
      }
    });
  }
  editElement(element: PeriodicElement): void{
    this.openDialog(element);
  }

  deleteElement(position: number): void{
    this.periodicElementService.deleteElement(position)
    .subscribe(()=> {
      this.dataSource = this.dataSource.filter(p => p.id !== position); //o data source filtra os elementos da posição que recebemos onde a posição seja diferente de onte estamos excluindo
    });
  }

  verDetalhes(produtoid: string): void {
    this.router.navigate(['/detalhes-produto', produtoid]);
  }
  voltar() {
    this.router.navigate(['/adicionar-produto']);  // Substitua '/produtos' com a rota correta da lista de produtos
  }
 
}
 
 
 
 
  /* readonly apiUrl = 'https://66e9c9cb87e41760944abebf.mockapi.io/api/usuarios/adicionar-produto';  
  email: string = '';
  senha: string = '';

  constructor(private http:HttpClient,  private router: Router) {}
  salvarCadastro() {
    this.http.post(this.apiUrl, { email: this.email, senha: this.senha }) 
         .subscribe(resultado => console.log(resultado));;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      const files = Array.from(input.files);
      console.log(files);
    }
  }
  

}*/

