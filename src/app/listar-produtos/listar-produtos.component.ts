import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarRow } from '@angular/material/toolbar';
import { MatTabsModule} from '@angular/material/tabs' ;
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select' ;
import { NgModule } from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog'
import {AfterViewInit, ViewChild} from '@angular/core';
import { PeriodicElement } from '../models/PeriodicElement';
import { PeriodicElementService } from '../../app/services/periodicElements';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-produtos',
  standalone: true,
  imports: [MatToolbar, 
    MatIconModule, 
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
    MatPaginatorModule,
    MatTableModule,
    MatDialogModule,

  ],
  templateUrl: './listar-produtos.component.html',
  styleUrl: './listar-produtos.component.css',
  providers: [PeriodicElementService],

})
export class ListarProdutosComponent implements OnInit  {
  @ViewChild(MatTable)
  table!:MatTable<any>;
  displayedColumns: string[] = ['position','nome', 'descricao', 'qtde', 'actions'];
  dataSource!: PeriodicElement[];

  constructor(
    public dialog: MatDialog,
    public periodicElementService: PeriodicElementService
  ){
    this.periodicElementService.getElements()
    .subscribe((data:PeriodicElement[])=> {
      console.log(data);
      this.dataSource=data; //chamda http 
    });
  }
  ngOnInit(): void{}

  openDialog(element: PeriodicElement | null): void{
    const dialogRef = this.dialog.open(ItemDialogComponent, {
      data: element === null ? {
      position: null, //se ele for n ulo passa vazio
      nome: '',      //se nao for null passa o element
      descricao: null,
      qtde: ''
     } : {
      id: element.id,
      position: element.position, //se ele for n ulo passa vazio
      nome: element.nome,      //se nao for null passa o element
      descricao: element.descricao,
      qtde: element.qtde
     }
    });
                                     //result quanfdo fecha o dialog 
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined){
        console.log(result);
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
  ////////////editar elemento
    editElement(element: PeriodicElement): void{
      this.openDialog(element);
    }

    ////////////deletar elemento 
    deleteElement(position: number): void{
      this.periodicElementService.deleteElement(position)
      .subscribe(()=> {
        this.dataSource = this.dataSource.filter(p => p.id !== position); //o data source filtra os elementos da posição que recebemos onde a posição seja diferente de onte estamos excluindo
      });
    }
}
  
/*const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'assets/mochila.png', name: 'Hydrogen', desc:'lore lorem lorem lorem lorem lorem', preco: 1.79, control:10},
  {position: 'assets/mochila.png', name: 'Helium', desc:'lore lorem lorem lorem lorem lorem',preco: 4.06, control:10},
  {position: 'assets/mochila.png', name: 'Lithium',desc:'lore lorem lorem lorem lorem lorem', preco: 6.91, control:10},
];*/

