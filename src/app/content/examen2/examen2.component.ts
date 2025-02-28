import { Component } from '@angular/core';

interface Pedido {
  nombre: string;
  costo: number;
}

@Component({
  selector: 'app-examen2',
  templateUrl: './examen2.component.html',
  styleUrl: './examen2.component.css',
})
export class Examen2Component {
  pedidos: Pedido[] = [
    { nombre: 'Hamburguesas', costo: 50 },
    { nombre: 'Papas fritas', costo: 25 },
    { nombre: 'Refresco', costo: 15 },
  ];

  pedidoSeleccionado!: Pedido;
  pedidosSeleccionados: Pedido[] = [];
  subtotal: number = 0;
  p!: number;
  total: number = 0;
  descuento: number = 0;

  agregarProducto() {
    console.log(this.pedidosSeleccionados);
    this.pedidosSeleccionados.push(this.pedidoSeleccionado);
    this.subtotal = 0;
    this.total = 0;
    this.descuento = 0;
    for (let p of this.pedidosSeleccionados) {
      this.subtotal += p.costo;
    }
    if (this.subtotal >= 90) {
      this.descuento = this.subtotal * 0.1;
      this.total = this.subtotal - this.descuento;
    } else {
      this.total = this.subtotal;
    }
  }

  // calculartotal() {
  //   this.descuento = this.subtotal * 0.1;
  //   if (this.subtotal > 90) {
  //     this.total = this.subtotal - this.descuento;
  //   } else {
  //     this.total = this.subtotal;
  //   }
  // }
}
