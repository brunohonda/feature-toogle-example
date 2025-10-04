import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'new-feature',
    loadComponent: () => import('./pages/new-feature/new-feature').then(m => m.NewFeature)
  },
  {
    path: 'route-guard-block',
    loadComponent: () => import('./pages/route-guard-block/route-guard-block').then(m => m.RouteGuardBlock)
  },
];
