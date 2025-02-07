import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
})
export class PortafolioComponent {
  // 1. Atributos/Variables/Tipos de datos

  texto!: string;
  saludo!: string;
  nombre!: string;
  apellido!: string;
  nombre_completo!: string;
  num1!: number;
  num2!: number;
  // resultado_suma!: number;
  // resultado_resta!: number;
  // resultado_multi!: number;
  // resultado_div!: number;
  gfarenheit!: number;
  gcelsius!: number;
  genero!: string;
  mensaje_genero!: string;
  calificacion!: number;
  resultado_calificacion!: string;
  numero1!: number;
  numero2!: number;
  operacion!: string;
  resultado: number | string = '';

  // 2. Metodos
  //!Este metodo se ejecuta al momento de iniciar la pagina
  ngOnInit() {
    // this.genero = 'hombre';
    //!Operaciones
    // this.num1 = 10;
    // this.num2 = 50;
    // //*Suma (Ejercicio 5)
    // this.resultado_suma = this.num1 + this.num2;
    // //*Resta
    // this.resultado_resta = this.num1 - this.num2;
    // //*Multiplicacion
    // this.resultado_multi = this.num1 * this.num2;
    // //*Division
    // this.resultado_div = this.num1 / this.num2;
    //* Convertir grados farenheit a celcius
    // this.gfarenheit = 90;
    // this.gcelsius = ((this.gfarenheit - 32) * 5) / 9;
    //*Mostrar un mensaje dependiendo el genero
    // if (this.genero == 'hombre') {
    //   this.mensaje_genero = 'Bienvenido al curso!';
    // }
    // if (this.genero == 'mujer') {
    //   this.mensaje_genero = 'Bienvenida al curso!';
    // }
  }

  saludar() {
    this.saludo = '! Hola ' + this.texto + ' !';
  }

  saludo_nombre_completo() {
    this.nombre_completo = '!Hola ' + this.nombre + this.apellido + '!';
  }

  calculo_grados() {
    this.gcelsius = ((this.gfarenheit - 32) * 5) / 9;
  }

  generos() {
    if (this.genero == '1') {
      this.mensaje_genero = '¡Bienvenido al curso!';
    } else if (this.genero == '2') {
      this.mensaje_genero = '¡Bienvenida al curso!';
    } else {
      this.mensaje_genero = 'Por favor selecciona un género.';
    }
  }

  clasificar_calificacion() {
    if (this.calificacion >= 0 && this.calificacion <= 30) {
      this.resultado_calificacion = 'Muy ineficiente';
    } else if (this.calificacion >= 31 && this.calificacion <= 50) {
      this.resultado_calificacion = 'Insuficiente';
    } else if (this.calificacion >= 51 && this.calificacion <= 60) {
      this.resultado_calificacion = 'Suficiente';
    } else if (this.calificacion >= 61 && this.calificacion <= 70) {
      this.resultado_calificacion = 'Bien';
    } else if (this.calificacion >= 71 && this.calificacion <= 90) {
      this.resultado_calificacion = 'Notable';
    } else if (this.calificacion >= 91 && this.calificacion <= 100) {
      this.resultado_calificacion = 'Sobresaliente';
    }
  }

  operar() {
    switch (this.operacion) {
      case 'suma':
        this.resultado = this.numero1 + this.numero2;
        break;

      case 'resta':
        this.resultado = this.numero1 - this.numero2;
        break;

      case 'multiplicacion':
        this.resultado = this.numero1 * this.numero2;
        break;

      case 'division':
        if (this.numero2 === 0) {
          alert('No se pueden dividir numeros por cero');
        } else {
          this.resultado = this.numero1 / this.numero2;
        }
        break;
      default:
        this.resultado = 'Por favor, selecciona una opcion valida';
    }
  }
}
