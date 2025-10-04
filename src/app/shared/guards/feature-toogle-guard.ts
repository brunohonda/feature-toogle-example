import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn, Router } from '@angular/router';
import { FeatureToggleEnum } from '../enums/feature-toggle.enum';
import { FeatureToggleService } from '../services/feature-toggle.service';

export const featureToogleGuard = (featureName: FeatureToggleEnum, commands?: readonly any[]): CanActivateFn => () => {
  const router = inject(Router);
  const service = inject(FeatureToggleService);
  const snackBar = inject(MatSnackBar);
  const isEnabled = service.getToggle(featureName)();

  if (isEnabled) {
    return true;
  }

  if (commands) {
    console.warn(`BANANA - Redirecting to ${commands.join('/')}`);
    return router.createUrlTree(commands);
  }
  console.warn('BANANA - Opening snack bar notification');
  snackBar.open(`Feature "${featureName}" is disabled`, 'Close', { duration: 3000 });

    return false
};
