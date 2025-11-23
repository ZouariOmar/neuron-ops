import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(m => m.Home) },
  // { path: 'a-propos', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'services', loadComponent: () => import('./pages/services/services').then(m => m.Services) },
  // { path: 'secteurs', loadComponent: () => import('./pages/sectors/sectors.component').then(m => m.SectorsComponent) },
  // { path: 'ops', loadComponent: () => import('./pages/ops/ops.component').then(m => m.OpsComponent) },
  // { path: 'etudes-de-cas', loadComponent: () => import('./pages/cases/cases.component').then(m => m.CasesComponent) },
  // { path: 'blog', loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact').then(m => m.Contact) },
];

