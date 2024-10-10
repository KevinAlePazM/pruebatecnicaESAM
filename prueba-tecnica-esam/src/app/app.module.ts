
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonComponent } from './button/button-component';  // Importa el componente
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Agrega esta línea si usas Web Components personalizados
  declarations: [
    ButtonComponent  // Declara el componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule { }
