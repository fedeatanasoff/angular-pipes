import { Component } from '@angular/core';
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formJson: any;

  usuario: Object = {
    nombre: 'Fede',
    apellido: 'Daniel',
    email: 'fede@mail.com'
  };

  constructor() {}

  guardar(formulario: any): void {
    console.log('Formulario =>', formulario);

    this.formJson = formulario.value;
    console.log(this.formJson);
  }
}
