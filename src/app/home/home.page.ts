import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre = new FormControl('');
  correo = new FormControl('');
  items: any = [];

  agregar() {
    if (this.nombre.value && this.correo.value) {
      this.items.push({ nombre: this.nombre.value, correo: this.correo.value });
      this.nombre.setValue('');
      this.correo.setValue('');
    }
  }
  eliminar(indice: any) {
    this.items.splice(indice, 1);
  }
  editar(indice: any) {
    if (this.nombre.value && this.correo.value) {
      this.items[indice].nombre = this.nombre.value;
      this.items[indice].correo = this.correo.value;
      this.nombre.setValue('');
      this.correo.setValue('');
    }
  }
  constructor() { }

}