import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bebedouro-card',
  imports: [],
  templateUrl: './bebedouro-card.html',
  styleUrl: './bebedouro-card.scss'
})
export class BebedouroCard {
  @Input()
  public titulo: string = "";

  @Input()
  public texto: string = "";

  @Input()
  public img: string = "";

  @Output()
  public onRemoveClicked = new EventEmitter<string>();

  onClick(titulo: string) {
    this.onRemoveClicked.emit(titulo);

  }
}
