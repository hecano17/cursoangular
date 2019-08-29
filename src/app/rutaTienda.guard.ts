import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TiendaComponent } from './tienda/tienda.component';


@Injectable()
export class RutaTiendaGuard{

private primeraNavegacion = true;

constructor(private route: Router){

   }//cierra Router

   canActivate(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot):boolean{
             
          if(this.primeraNavegacion){
              this.primeraNavegacion = false;
              if(route.component != TiendaComponent){
                  this.route.navigateByUrl("/");
                  return false;
              }
          }
          return true;
       }
       

}