import { Component, Input } from '@angular/core';
import { Checkbox } from "../checkbox/checkbox";

@Component({
  selector: 'app-filtro-component',
  imports: [Checkbox],
  templateUrl: './filtro-component.html',
  styleUrl: './filtro-component.scss',
})
export class FiltroComponent {
  @Input()
  mensagem: string = '';

  titulos = ['IBBL', 'Esmaltec', 'Outro Título'];
}
