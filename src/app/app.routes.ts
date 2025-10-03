import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'new-feature',
    loadComponent: () => import('./pages/new-feature/new-feature').then(m => m.NewFeature)
  },
];
