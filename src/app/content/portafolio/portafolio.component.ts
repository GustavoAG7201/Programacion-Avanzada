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
  genero!: string
  mensaje_genero!:string
  calificacion!:number
  resultado_calificacion!: string

  // 2. Metodos
  //* Este metodo se ejecuta al momento de iniciar la pagina
  ngOnInit(){

    this.nombre = "Gustavo"
    this.apellido = "Alonso"
    this.nombre_completo = "Bienvenido! " + this.nombre + " " + this.apellido + "!"
    this.texto = "Hola mundo!"
    this.genero = "hombre"
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

    //* Convertir grados farenheit a celcius
    this.gfarenheit = 90
    this.gcelsius = (this.gfarenheit - 32) * 5/9

    //*Mostrar un mensaje dependiendo el genero
    if (this.genero == 'hombre') {
      this.mensaje_genero = "Bienvenido al curso!"
    }

    if (this.genero == 'mujer'){
      this.mensaje_genero = "Bienvenida al curso!"
    }

    //*Pedir una calificacion y mostrar un mensaje segun la nota

    this.calificacion = 100

    if(this.calificacion >= 0 &&  this.calificacion <= 30){
      this.resultado_calificacion = "Muy ineficiente"
    }
    else if(this.calificacion >= 31 && this.calificacion <= 50 ){
      this.resultado_calificacion = "Insuficiente"
    }
    else if(this.calificacion >= 51 && this.calificacion <= 60 ){
      this.resultado_calificacion = "Suficiente"
    }
    else if(this.calificacion >= 61 && this.calificacion <= 70 ){
      this.resultado_calificacion = "Bien"
    }
    else if(this.calificacion >= 71 && this.calificacion <= 90 ){
      this.resultado_calificacion = "Notable"
    }
    else if(this.calificacion >= 91 && this.calificacion <= 100 ){
      this.resultado_calificacion = "Sobresaliente"
    }
  }
}
