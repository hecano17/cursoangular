import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TiendaModule } from './tienda/tienda.module';
import { RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { DetalleCarroComponent } from './tienda/detalleCarro.component';
import { CheckOutComponent } from './tienda/checkout.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiendaModule,
    RouterModule.forRoot([
      {path:"tienda",component:TiendaComponent},
      {path:"carro",component:DetalleCarroComponent},
      {path:"checkout",component:CheckOutComponent},
      {path:"**",component:TiendaComponent}
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
