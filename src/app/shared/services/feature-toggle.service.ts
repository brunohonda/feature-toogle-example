import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { FeatureToggleEnum } from '../enums/feature-toggle.enum';

@Injectable({
  providedIn: 'root'
})
export class FeatureToggleService {
  private readonly _features: WritableSignal<Record<FeatureToggleEnum, boolean >> = signal({
    [FeatureToggleEnum.newFeature]: true,
    [FeatureToggleEnum.routeGuardBlock]: false,
  });

  getToggle(feature: FeatureToggleEnum): Signal<boolean> {
    return computed(() => this._features()[feature]);
  }

  setFeatureToggle(feature: FeatureToggleEnum, isEnabled: boolean) {
    this._features.update((currentFeatures) => ({
      ...currentFeatures,
      [feature]: isEnabled
    }));
  }
}
