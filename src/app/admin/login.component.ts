import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../modelo/auth.services';

@Component({
    templateUrl:"login.component.html"
})
export class LoginComponent{
    public nombreUsuario: string;
    public password:string;
    public mensajeError:string;
    
    constructor(private route:Router, private auth:AuthService){}
    
    autentifica(form:NgForm){
        if(form.valid){
            //this.nombreUsuario=form.controls.nombreUsuario.value;
            //this.password=form.controls.password.value;
            this.auth.autentificar(this.nombreUsuario,this.password).subscribe(response=>{if(response){
                this.route.navigateByUrl("/admin/operaciones");
            }
            else{
                this.mensajeError="Datos Login Invalidos!"
            }
        })
            
        }else{
            this.mensajeError="Datos Login Invalidos!";
        }
            
    }
}