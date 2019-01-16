import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';
import { FormComponent } from './components/form/form.component';
import { FormDataComponent } from './components/form-data/form-data.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'misce', component: MiscelaneosComponent },
  { path: 'form', component: FormComponent },
  { path: 'form-data', component: FormDataComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    children: USUARIO_ROUTES
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
