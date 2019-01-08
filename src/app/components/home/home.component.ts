import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'pipes';
  nombre = 'Federico';
  array = [1, 2, 3, 4, 5];
  PI = Math.PI;
  a = 1.234667;
  salario = 17000.5;
  heroe = {
    nombre: 'Fede',
    edad: 33,
    direccion: {
      calle: 'pindonga',
      altura: 4444
    }
  };

  fecha = new Date();

  constructor() {}

  ngOnInit() {}

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3000);
  });
}
