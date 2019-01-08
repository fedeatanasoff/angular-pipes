import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { HomeComponent } from './components/home/home.component';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';
import { NgStyleComponent } from './components/shared/ng-style/ng-style.component';
import { NgClassComponent } from './components/shared/ng-class/ng-class.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MiscelaneosComponent,
    NavbarComponent,
    NgStyleComponent,
    NgClassComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(ROUTES, { useHash: true })],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule {}
