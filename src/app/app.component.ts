import { Component } from '@angular/core';

@Component({
  selector: 'app-tienda',
  ///template:`<div class="bg-success p-2 text-center text-white">Tienda de Viajes</div>`,
  // template:"<tienda></tienda>",
  template:"<router-outlet></router-outlet>",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TiendaViajes';
}
