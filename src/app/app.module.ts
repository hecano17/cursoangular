import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TiendaModule } from './tienda/tienda.module';
import { RouterModule } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';
import { DetalleCarroComponent } from './tienda/detalleCarro.component';
import { CheckoutComponent } from './tienda/checkout.component';
import { RutaTiendaGuard } from './rutaTienda.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiendaModule,
    RouterModule.forRoot([
      {path:"tienda",component:TiendaComponent,canActivate:[RutaTiendaGuard]},
      {path:"carro",component:DetalleCarroComponent,canActivate:[RutaTiendaGuard]},
      {path:"checkout",component:CheckoutComponent,canActivate:[RutaTiendaGuard]},
      {path:"admin", loadChildren:"./admin/admin.module#AdminModule",canActivate:[RutaTiendaGuard]},
      {path:"**",component:TiendaComponent}
    ])
  ],
  providers: [RutaTiendaGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
