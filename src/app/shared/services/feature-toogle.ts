import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { FeatureToggleEnum } from '../enums/feature-toggle.enum';

@Injectable({
  providedIn: 'root'
})
export class FeatureToogle {
  private readonly _features: WritableSignal<Record<FeatureToggleEnum, boolean >> = signal({
    [FeatureToggleEnum.newFeature]: true,
    [FeatureToggleEnum.routeGuardBlock]: false,
  });

  getToogle(feature: FeatureToggleEnum): Signal<boolean> {
    return computed(() => this._features()[feature]);
  }

  setFeatureToogle(feature: FeatureToggleEnum, isEnabled: boolean) {
    this._features.update((currentFeatures) => ({
      ...currentFeatures,
      [feature]: isEnabled
    }));
  }
}
