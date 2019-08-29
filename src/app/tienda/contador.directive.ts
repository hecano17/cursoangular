import {ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges} from "@angular/core";
import {Directive} from "@angular/core";

import { Component } from '@angular/core';



@Directive({
    selector:"[contadorOf]"
 
 })

export class ContadorDirectiva{

    constructor(private contnedor: ViewContainerRef,
        private template: TemplateRef<Object>){

        }
        @Input("contadorOf")
        contador : number
      
        ngOnChanges(cambio : SimpleChanges){
          this.contnedor.clear();
          for(let i=0; i < this.contador ; i++){
              this.contnedor.createEmbeddedView(this.template, new ContextoContadorDirectiva(i+1) )
          }
        }
}



export class ContextoContadorDirectiva{
    constructor(public $implicit: any){

    }
}