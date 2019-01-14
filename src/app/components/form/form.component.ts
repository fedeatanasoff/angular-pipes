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
    email: null,
    pais: null,
    genero: null
  };

  generos: string[] = ['Hombre', 'Mujer', 'No Especificar'];

  paises = [
    {
      codigo: 'AR',
      nombre: 'Argentina'
    },
    {
      codigo: 'UR',
      nombre: 'Uruguay'
    },
    {
      codigo: 'BR',
      nombre: 'Brazil'
    },
    {
      codigo: 'VE',
      nombre: 'Venezuela'
    },
    {
      codigo: 'BOL',
      nombre: 'Bolivia'
    }
  ];

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
  pais: string;
  genero: null;
}
