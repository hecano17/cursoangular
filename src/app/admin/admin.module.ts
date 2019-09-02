import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

let rutas=RouterModule.forChild([
    {path:"login",component:LoginComponent},
    {path:"operaciones",component:AdminComponent,canActivate:[AuthGuard]},
    {path:"**",redirectTo:"login"}
])

@NgModule({
    imports:[CommonModule,FormsModule,rutas],
    providers:[AuthGuard],
    declarations:[LoginComponent,AdminComponent]
})
export class AdminModule{

}