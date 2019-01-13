import { Component } from '@angular/core';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formJson: any;

  usuario: User = {
    nombre: null,
    apellido: null,
    email: null
  };

  constructor() {}

  guardar(formulario: any): void {
    console.log('Formulario =>', formulario);

    this.formJson = formulario.value;
    console.log(this.formJson);
  }
}

interface User {
  nombre: string;
  apellido: string;
  email: string;
}
