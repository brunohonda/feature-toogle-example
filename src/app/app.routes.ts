import { Routes } from '@angular/router';
import { FeatureToggleEnum } from './shared/enums/feature-toggle.enum';
import { featureToogleGuard } from './shared/guards/feature-toogle-guard';

export const routes: Routes = [
  {
    path: 'new-feature',
    loadComponent: () => import('./pages/new-feature/new-feature').then(m => m.NewFeature)
  },
  {
    path: 'route-guard-block',
    loadComponent: () => import('./pages/route-guard-block/route-guard-block').then(m => m.RouteGuardBlock),
    canActivate: [featureToogleGuard(FeatureToggleEnum.routeGuardBlock)]
  },
  {
    path: 'versioned-route',
    loadComponent: () => import('./pages/route-version-1/route-version-1').then(m => m.RouteVersion1),
  },
  {
    path: 'versioned-route/v2',
    loadComponent: () => import('./pages/route-version-2/route-version-2').then(m => m.RouteVersion2),
    canActivate: [featureToogleGuard(FeatureToggleEnum.routeVersion, [ 'versioned-route' ])]
  },
  {
    path: 'fragments',
    loadComponent: () => import('./pages/partial-toogle/partial-toogle').then(m => m.PartialToogle)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/service/service').then(m => m.Service)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'fragments'
  }
];
