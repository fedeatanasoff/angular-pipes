import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>usuario-nuevo works!</p>
  `,
  styles: []
})
export class UsuarioNuevoComponent implements OnInit {
  constructor(private _actRoute: ActivatedRoute) {
    this._actRoute.parent.params.subscribe(data =>
      console.log('Ruta Nuevo: ', data)
    );
  }

  ngOnInit() {}
}
