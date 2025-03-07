import { Component } from '@angular/core';
import { CrudService } from '../../servicios/crud.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor(private crud: CrudService) {}
}
