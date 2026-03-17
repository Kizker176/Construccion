import { Routes } from "@angular/router";

export default [
    {
        path: '',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    },
    {
        path: 'servicios',
        loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent),
    },
    {
        path: 'contacto',
        loadComponent: () => import('./cta/cta.component').then(m => m.CtaComponent),
    }
] as Routes;