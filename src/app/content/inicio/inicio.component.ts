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
    id: '',
    nombreArticulo: '',
    descripcionArticulo: '',
    categoriaArticulo: '',
    marcaArticulo: '',
    modeloArticulo: '',
    precioArticulo: 0,
    stockArticulo: 0,
    imagenArticulo: '',
    numSerieArticulo: '',
    garantiaArticulo: 0,
  };

  coleccion!: string;
  articulos: any[] = [];

  proceso_agregar = true;
  proceso_editar = false;

  ngOnInit() {
    this.cargarArticulos();
  }

  insertarArticulo() {
    this.coleccion = 'articulos';
    this.crud.create(this.coleccion, this.form).then((response: any) => {
      if (response) {
        alert('Tu articulo se ha registrado correctamente!');
        location.reload();
      } else {
        alert('Parece que algo salio mal el registrar tu articulo:(');
      }
      console.log(response);
    });
  }

  cargarArticulos() {
    this.coleccion = 'articulos';
    this.crud.getAll(this.coleccion).subscribe((articulos) => {
      this.articulos = articulos;
      console.log('Artículos cargados:', this.articulos);
    });
  }

  agregar() {
    this.proceso_agregar = true;
    this.proceso_editar = false;
    this.form = {
      id: '',
      nombreArticulo: '',
      descripcionArticulo: '',
      categoriaArticulo: '',
      marcaArticulo: '',
      modeloArticulo: '',
      precioArticulo: 0,
      stockArticulo: 0,
      imagenArticulo: '',
      numSerieArticulo: '',
      garantiaArticulo: 0,
    };
  }

  editar(articulo: any) {
    this.proceso_agregar = false;
    this.proceso_editar = true;
    this.form = { ...articulo };
  }

  actualizar() {
    this.crud
      .update(this.coleccion, this.form.id, this.form)
      .then((response: any) => {
        if (response) {
          alert('¡Tu registro se actualizó correctamente!');

          location.reload();
        } else {
          alert('Error al actualizar el artículo.');
        }
      });
  }

  eliminar(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este artículo?')) {
      this.crud.delete(this.coleccion, id).then((response: boolean) => {
        if (response) {
          alert('Artículo eliminado correctamente.');
          location.reload();
        } else {
          alert('Error al eliminar el artículo.');
        }
      });
    }
  }
}
