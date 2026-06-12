import { Routes } from '@angular/router';
import { Products } from './pages/products/products';

//const routes: Routes = [{ path: '', component: Products }];

export const PRODUCTS_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/products/products').then((m) => m.Products),
    }
];