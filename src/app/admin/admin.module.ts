import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';

let rutas = RouterModule.forChild([
    {path: "login", component:LoginComponent},
    {path: "operaciones", component:AdminComponent},
    {path: "**", redirectTo:"login"}
])
@NgModule({
   imports: [CommonModule,  FormsModule, rutas ],
   declarations: [LoginComponent, AdminComponent]

})

export class AdminModule{}