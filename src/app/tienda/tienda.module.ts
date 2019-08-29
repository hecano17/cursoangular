import { NgModule } from "@angular/core";
import { ModeloModule } from '../modelo/modelo.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TiendaComponent } from './tienda.component';
import { ContadorDirectiva } from './contador.directive';
import { ResumenCarro } from './resumenCarro.component';
import { DetalleCarroComponent } from './detalleCarro.component';
import { CheckOutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';

@NgModule({
      declarations: [ 
          TiendaComponent,
          ContadorDirectiva,
          ResumenCarro,
          DetalleCarroComponent,
          CheckOutComponent
       ],
      
      imports:[
          ModeloModule,BrowserModule,FormsModule,RouterModule
        
        ],

      exports:[
    TiendaComponent,
    DetalleCarroComponent,
    CheckOutComponent
        ]

})

export class TiendaModule{


}