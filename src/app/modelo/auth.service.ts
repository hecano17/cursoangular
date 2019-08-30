import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthService{

    constructor(private datasource: RestDataSource){
              }
autentificar(nombreUsuario: string, password: string):Observable<boolean>{
    return this.datasource.autentificar(nombreUsuario,password);
}

get autentificado():boolean{
    return this.datasource.auth_token != null;
}

limpiar(){
    this.datasource.auth_token = null;
}

}