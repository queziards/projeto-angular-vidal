import { Component } from '@angular/core';
import {Inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table'
import {MatButtonModule} from '@angular/material/button';
import { MatTableDataSource } from '@angular/material/table';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms'; // Importe   
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'; // Importar   
import { MatInputModule } from '@angular/material/input';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { OnInit} from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { PeriodicElement } from '../models/PeriodicElement';
import { PeriodicElementService } from '../services/periodicElements';
//import { CadastrarProdutoComponent } from '../cadastrar-produto/cadastrar-produto.component';
//import { ListarProdutosComponent } from '../listar-produtos/listar-produtos.component';
import { AdicionarProdutoComponent } from '../adicionar-produto/adicionar-produto.component';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-item-dialog',
  standalone: true,
  imports: [MatTableModule,
    MatButtonModule, MatFormField,
    FormsModule,  CommonModule,
    MatIconModule,ReactiveFormsModule,
    MatInputModule,  
    MatDialogModule, 
   // CadastrarProdutoComponent,
    //ListarProdutosComponent
    AdicionarProdutoComponent, 
    CurrencyPipe,
  ],
  templateUrl: './item-dialog.component.html',
  styleUrl: './item-dialog.component.css',
  providers:[MatDialog, CurrencyPipe]
})
export class ItemDialogComponent implements OnInit{
  element!: PeriodicElement;
  isChange!: boolean;
  a: number = 0.239;
 
 
  constructor(
    @Inject(MAT_DIALOG_DATA) //injetando o data/valor que entra no dialog
    public data: PeriodicElement, //que é esse elemento 
    public dialogRef: MatDialogRef<ItemDialogComponent>,//entra nesse valor component
    ){}


   ngOnInit(): void { //caregar dados, fazer formularios etc
      if(this.data.id !==null){ //se o elemento for diferente de null
       this.isChange = true;   /// a var cha nge reccebe null
      }else {
       this.isChange = false; 
      }
   }
 
   onCancel(): void {
     this.dialogRef.close()
   }
 
 }
 

