import { Component} from '@angular/core';
import { ProductoRepositorio } from '../modelo/producto.repositorio';
import { Producto } from '../modelo/producto.model';
import { Carro } from '../modelo/carro.model';
import { Router } from '@angular/router';

@Component({
  selector: 'tienda',
  templateUrl: './tienda.component.html'
})
export class TiendaComponent {

  public categoriaSeleccionada = null;
  public productosPorPagina = 4;
  public paginaSeleccionada = 1;


  constructor(private repositorio: ProductoRepositorio,private carro: Carro, private router:Router) { }


  get productos(): Producto[] {
    let indicePagina = (this.paginaSeleccionada - 1) * this.productosPorPagina;
    return this.repositorio.getProductos(this.categoriaSeleccionada).slice(indicePagina, indicePagina + this.productosPorPagina);
  }

  get categorias(): string[] {
    return this.repositorio.getCategorias();
  }

  cambiaCategoria(nuevaCategoria?: string) {
    this.categoriaSeleccionada = nuevaCategoria;
    this.cambiaPagina(1);
  }

  cambiaPagina(nuevaPagina: number) {
    this.paginaSeleccionada = nuevaPagina;
    

  }

  cambiaProductoPorPagina(nuevoTamano:number) {
  
    this.productosPorPagina=nuevoTamano;
    this.cambiaPagina(1);
  }
  get numerosPagina():number[]{
    return Array(Math.ceil(this.repositorio.getProductos(this.categoriaSeleccionada).length/this.productosPorPagina))
    .fill(0).map((x,i)=>i+1);
  }

agregarProductoAlCarro(producto:Producto){
  this.carro.agregarLinea(producto);
 // this.router.navigateByUrl("/carro");

}


}
