import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { TablaProductoComponent } from './tablaProducto.component';
import { EditorProductosComponent } from './editorProductos.component';
import { TablaOrdenesComponent } from './tablaOrdenes.component';

let rutas=RouterModule.forChild([
    {path:"login",component:LoginComponent},
    {path:"operaciones",component:AdminComponent,canActivate:[AuthGuard],children:[
        {path:"productos",component:TablaProductoComponent},
        {path:"productos/:mode",component:EditorProductosComponent},
        {path:"productos/:mode/:id",component:EditorProductosComponent},
        {path:"ordenes",component:TablaOrdenesComponent},
        {path:"**",redirectTo:"productos"}
    ]
    
    },
    {path:"**",redirectTo:"login"}
])

@NgModule({
    imports:[CommonModule,FormsModule,rutas],
    providers:[AuthGuard],
    declarations:[LoginComponent,AdminComponent,TablaOrdenesComponent,TablaProductoComponent,EditorProductosComponent]
})
export class AdminModule{

}