import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  formu: FormGroup;
  constructor() {
    this.formu = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellido: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required)
    });
  }

  guardarCambios(): void {
    console.log(this.formu.value);
    console.log('Formu =>', this.formu);
  }

  ngOnInit() {}
}
