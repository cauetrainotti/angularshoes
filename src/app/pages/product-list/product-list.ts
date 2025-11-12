import { Component } from '@angular/core';
import { BebedouroCard } from '../../components/bebedouro-card/bebedouro-card';
import { FiltroComponent } from '../../components/filtro-component/filtro-component';
import { ProductService, ProductType } from '../../core/services/product';

@Component({
  selector: 'app-product-list',
  imports: [BebedouroCard, FiltroComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

export class ProductList {
  protected products: Array<ProductType> = [];
  constructor(private productService: ProductService) {
    this.loadData();

    this.productService.productsMustBeReloaded().subscribe(() => {
      this.loadData();
    })
  }

  private loadData() {
    this.productService.getProducts().subscribe((products: Array<ProductType>) => {
      this.products = products;
    });
  }
}
