import { Component } from '@angular/core';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {
  // 1. Atributos/Variables/Tipos de datos
  
  texto!: string 
  nombre!: string
  apellido!: string
  nombre_completo!:string
  num1!: number
  num2!: number
  resultado_suma!: number
  resultado_resta!:number
  resultado_multi!:number
  resultado_div!:number
  gfarenheit!: number
  gcelsius!:number

  // 2. Metodos
  //* Este metodo se ejecuta al momento de iniciar la pagina
  ngOnInit(){

    this.nombre = "Gustavo"
    this.apellido = "Alonso"
    this.nombre_completo = "Bienvenido! " + this.nombre + " " + this.apellido + "!"

    this.texto = "Hola mundo!"
    // console.log(this.texto)


    //! Ejercicio 2. Mostrar un texto en alerta
    // alert(this.texto)


    //! Ejercicio 4. Mostrar dos textos concatenados
    // alert(this.nombre_completo)


    //!Operaciones
    this.num1 = 10
    this.num2 = 50
    
    //*Suma (Ejercicio 5)
    this.resultado_suma =  this.num1 + this.num2

    //*Resta
    this.resultado_resta = this.num1 - this.num2

    //*Multiplicacion
    this.resultado_multi = this.num1 * this.num2

    //*Division
    this.resultado_div = this.num1 / this.num2

    this.gfarenheit = 90
    this.gcelsius = (this.gfarenheit - 32) * 5/9


  }
}
