import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  formu: FormGroup;

  user_null: any = {
    nombrecompleto: {
      nombre: null,
      apellido: null
    },
    email: null,
    pasatiempos: [null]
  };

  user: Object = {
    nombrecompleto: {
      nombre: '',
      apellido: ''
    },
    email: ''
    // pasatiempos: ['comer', 'dormir']
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
      ]),
      pasatiempos: new FormArray([new FormControl('', Validators.required)])
    });

    this.formu.setValue(this.user_null);
  }

  agregarPasatiempo(): void {
    (<FormArray>this.formu.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    );
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
  pasatiempos: string[];
}
