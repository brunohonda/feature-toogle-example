import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { FeatureToggle as FeatureToogleEnum } from '../enums/feature-toggle';

@Injectable({
  providedIn: 'root'
})
export class FeatureToogle {
  private readonly _features: WritableSignal<Record<FeatureToogleEnum, boolean >> = signal({
    [FeatureToogleEnum.newFeature]: true,
    [FeatureToogleEnum.routeGuardBlock]: false,
  });

  getToogle(feature: FeatureToogleEnum): Signal<boolean> {
    return computed(() => this._features()[feature]);
  }

  setFeatureToogle(feature: FeatureToogleEnum, isEnabled: boolean) {
    this._features.update((currentFeatures) => ({
      ...currentFeatures,
      [feature]: isEnabled
    }));
  }
}
