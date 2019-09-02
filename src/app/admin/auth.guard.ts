import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../modelo/auth.services';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthGuard{
    constructor(private router:Router, private auth:AuthService){}

    canActivate(router:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
        if(!this.auth.autentificado){
            this.router.navigateByUrl("/admin/login");
            return false;
        }
        return true;
    }
}