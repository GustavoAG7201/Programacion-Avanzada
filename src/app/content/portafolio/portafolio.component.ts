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

  //array alumnos
  alumnos: Array<string> = [];
  alumno!: string;

  //array numeros telefonicos
  numeros_telefonicos: string[] = [];
  numero_telefonico: string = '';
  mensaje_error: string = '';

  //array_calificaciones
  calificaciones: Array<number> = [];
  calificacion_array!: number;

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
    this.gcelsius = Math.round(((this.gfarenheit - 32) * 5) / 9);
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
  agregar() {
    // alert('Si funciona! :D');
    // alert(this.alumno);

    if (this.alumno.trim() !== '') {
      this.alumnos.push(this.alumno);
      this.alumno = '';
    }

    // console.log(this.alumnos);
  }

  agregar_telefono() {
    if (this.numero_telefonico.length !== 10) {
      this.mensaje_error =
        'El número debe tener exactamente 10 dígitos y no debe tener letras.';
      return;
    }
    this.numeros_telefonicos.push(this.numero_telefonico);
    this.numero_telefonico = '';
    this.mensaje_error = '';
  }

  validar_telefono() {
    // Permitir solo números
    this.numero_telefonico = this.numero_telefonico.replace(/\D/g, '');

    // Si la longitud es mayor a 10, recortar
    if (this.numero_telefonico.length > 10) {
      this.numero_telefonico = this.numero_telefonico.slice(0, 10);
    }
  }

  ordenar_calificaciones() {
    if (this.calificacion_array >= 0 && this.calificacion_array <= 10) {
      this.calificaciones.push(this.calificacion_array);
      this.calificaciones.sort((a, b) => b - a);
      this.calificacion_array = 0;
    }
  }
}
