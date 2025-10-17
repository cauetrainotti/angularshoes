import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductList } from './pages/product-list/product-list';
import { Carrinho } from './pages/carrinho/carrinho';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'produtos', component: ProductList },
  { path: 'carrinho', component: Carrinho },
];
