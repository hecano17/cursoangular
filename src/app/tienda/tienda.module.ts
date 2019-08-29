import { NgModule } from "@angular/core";
import { ModeloModule } from '../modelo/modelo.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TiendaComponent } from './tienda.component';
import { ContadorDirectiva } from './contador.directive';

@NgModule({
      declarations: [ 
          TiendaComponent,
          ContadorDirectiva
       ],
      
      imports:[
          ModeloModule,BrowserModule,FormsModule
        
        ],

      exports:[
    TiendaComponent
        ]

})

export class TiendaModule{


}