import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivateFn } from '@angular/router';
import { FeatureToggleEnum } from '../enums/feature-toggle.enum';
import { FeatureToggleService } from '../services/feature-toggle.service';

export const featureToogleGuard = (featureName: FeatureToggleEnum): CanActivateFn => () => {
    const service = inject(FeatureToggleService);
    const snackBar = inject(MatSnackBar);
    const isEnabled = service.getToggle(featureName)();

    if (!isEnabled) {
      snackBar.open(`Feature "${featureName}" is disabled`, 'Close', { duration: 3000 });
    }

    return isEnabled;
};
