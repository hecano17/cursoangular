import { Injectable } from "@angular/core";
import { Subject, Observable } from 'rxjs';


@Injectable()
export class ConexionService {
    private eventosConexion: Subject<boolean>;

    constructor() {
        this.eventosConexion = new Subject<boolean>();

        window.addEventListener("online", (e) => this.manejoConexion(e) );
        window.addEventListener("offline", (e) => this.manejoConexion(e) );
    }


    private manejoConexion(evento) {
        this.eventosConexion.next(evento);
    }

    get conectado():boolean{
     return window.navigator.onLine;
    }

get cambios():Observable<boolean>{
    return this.eventosConexion;
}

}