import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', pathMatch: 'full' ,redirectTo: '/pages/templates/selection' },
    { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) }
];
