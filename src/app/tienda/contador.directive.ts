import {Directive,ViewContainerRef,TemplateRef,Input,Attribute,SimpleChanges} from "@angular/core";

@Directive({
    selector:"[contadorOf]"
})
export class ContadorDirectiva {
    constructor(private contenedor: ViewContainerRef,private template:TemplateRef<Object>){

    }

    @Input("contadorOf")
    contador:number

    ngOnChanges(cambio:SimpleChanges){
        this.contenedor.clear();
        for(let i=0;i<this.contador;i++){
            this.contenedor.createEmbeddedView(this.template,new ContextoContadorDirectiva(i+1))
        }

    }
    
}

export class ContextoContadorDirectiva{
    constructor(public $implicit: any){}
}