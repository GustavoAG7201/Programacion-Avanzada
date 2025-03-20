import { Component } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor(private crud: CrudService) {}

  form = {
    nombreArticulo: '',
    descripcionArticulo: '',
    categoriaArticulo: '',
    marcaArticulo: '',
    modeloArticulo: '',
    precioArticulo: 0,
    stockArticulo: 0,
    imagenArticulo: null,
    numSerieArticulo: '',
    garantiaArticulo: 0,
  };

  coleccion!: string;
  articulos: any[] = [];

  insertarArticulo() {
    this.coleccion = 'articulos';
    this.crud.create(this.coleccion, this.form).then((response: any) => {
      if (response) {
        alert('Tu articulo se ha registrado correctamente!');
      } else {
        alert('Parece que algo salio mal el registrar tu articulo:(');
      }
      console.log(response);
    });
  }

  // Método para cargar los artículos
  cargarArticulos() {
    this.coleccion = 'articulos';
    this.crud.getAll(this.coleccion).subscribe((articulos) => {
      this.articulos = articulos;
      console.log('Artículos cargados:', this.articulos);
    });
  }
}
