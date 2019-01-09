import { Routes } from '@angular/router';
import { UsuarioDetalleComponent } from '../usuario/usuario-detalle.component';
import { UsuarioEditarComponent } from '../usuario/usuario-editar.component';
import { UsuarioNuevoComponent } from '../usuario/usuario-nuevo.component';

export const USUARIO_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'detalle' }
];
