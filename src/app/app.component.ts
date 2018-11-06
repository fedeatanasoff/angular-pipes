import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('llego la data');
    }, 3000);
  });
}
