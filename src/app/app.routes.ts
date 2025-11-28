import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then(m => m.About) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  { path: 'sectors', loadComponent: () => import('./pages/sectors/sectors').then(m => m.Sectors) },
  // { path: 'ops', loadComponent: () => import('./pages/ops/ops').then(m => m.Ops) },
  // { path: 'etudes-de-cas', loadComponent: () => import('./pages/cases/cases.component').then(m => m.CasesComponent) },
  // { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
];

