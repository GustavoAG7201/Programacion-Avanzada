import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  // 1. Atributos/Variables/Tipos de datos
  

  //! Ejercicio 1. Mostrar un texto en consola
  texto!: string 
  nombre = "Gustavo"
  apellido = "Alonso"

  //* combinaciones/concatenar
  nombre_completo = "Bienvenido! " + this.nombre + " " + this.apellido + "!"

  // 2. Metodos
  //* Este metodo se ejecuta al momento de iniciar la pagina
  ngOnInit(){
    this.texto = "Hola mundo!"
    console.log(this.texto)


    //! Ejercicio 2. Mostrar un texto en alerta
    alert(this.texto)


    //! Ejercicio 4. Mostrar dos textos concatenados
    alert(this.nombre_completo)
  }
}
