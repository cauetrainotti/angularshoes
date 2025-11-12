import { Component, Input } from '@angular/core';
import { ProductService, ProductType } from '../../core/services/product';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-bebedouro-card',
  imports: [RouterLink],
  templateUrl: './bebedouro-card.html',
  styleUrl: './bebedouro-card.scss',
})
export class BebedouroCard {
  @Input()
  public product!: ProductType;

  constructor(private productService: ProductService) {}

  delete() {
    this.productService.deleteProductById(this.product.id);
  }
}