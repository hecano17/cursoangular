import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from './producto.model';
import { Orden } from './orden.model';
import { map} from 'rxjs/operators';
 

const PROTOCOLO ="http";
const PORT = 3500;

@Injectable()
export class RestDataSource{
     urlBase: string;
     auth_token: string;

  constructor(private clienteHttp: HttpClient){
       this.urlBase = `${PROTOCOLO}://${location.hostname}:${PORT}/`;
  }

  getProductos():Observable<Producto[]>{
      return this.clienteHttp.get<Producto[]>(this.urlBase +"productos");
  }

 grabarOrden(orden:Orden): Observable<Orden>{
     console.log(JSON.stringify(orden));
     return this.clienteHttp.post<Orden>(this.urlBase + "ordenes", orden);
 }

 autentificar(nombreusuario:string, password:string): Observable<boolean>{
     return this.clienteHttp.post<any>(this.urlBase + "login",
     {name: nombreusuario, password: password}).pipe(map(response => {
        this.auth_token = response.succes ? response.token: null;
        return response.succes }));
 }

}