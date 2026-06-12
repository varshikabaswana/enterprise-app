import { Routes } from '@angular/router';
import { Products } from './pages/products/products';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/products/products').then((m) => m.Products),
    }
];