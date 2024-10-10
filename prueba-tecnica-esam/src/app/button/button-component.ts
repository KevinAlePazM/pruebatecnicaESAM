import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button-component.html',
  styleUrls: ['./button-component.css']
})
export class ButtonComponent {
  @Input() titulo: string = '';  // Propiedad para el título
  @Input() imagen: string = '';  // Propiedad para la imagen
}

