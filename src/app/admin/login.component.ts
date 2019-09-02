import { Component } from "@angular/core";
import { Route, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../modelo/auth.service';

@Component({
    
    templateUrl:"login.component.html"
 
})

export class LoginComponent{

    public nombreUsuario: string;
    public password: string;
    public mensajeError: string;

    constructor(private router: Router, private auth:AuthService){

    }

    autentifica(form: NgForm){
        if(form.valid){
            this.router.navigateByUrl("admin/operaciones");
        }else{
            this.mensajeError = ("Datos Invalidos");
        }
    }
}