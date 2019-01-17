import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  formu: FormGroup;

  user_null: User = {
    nombrecompleto: {
      nombre: null,
      apellido: null
    },
    email: null
  };

  user: User = {
    nombrecompleto: {
      nombre: '',
      apellido: ''
    },
    email: ''
  };

  constructor() {
    this.formu = new FormGroup({
      nombrecompleto: new FormGroup({
        nombre: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ]),
        apellido: new FormControl('', [
          Validators.required,
          Validators.minLength(3)
        ])
      }),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ])
    });

    this.formu.setValue(this.user_null);
  }

  guardarCambios(): void {
    console.log(this.formu.value);
    console.log('Formu =>', this.formu);

    this.formu.reset(this.user_null);
  }

  ngOnInit() {}
}

interface User {
  nombrecompleto: {
    nombre: string;
    apellido: string;
  };
  email: string;
}
