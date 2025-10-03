import { computed, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { FeatureToogle as FeatureToogleEnum } from './../enums/feature-toogle';

@Injectable({
  providedIn: 'root'
})
export class FeatureToogle {
  private readonly _features: WritableSignal<Record<FeatureToogleEnum, boolean >> = signal({
    newFeature: false,
  });

  getToogle(feature: FeatureToogleEnum): Signal<boolean> {
    return computed(() => this._features()[feature]);
  }
}
