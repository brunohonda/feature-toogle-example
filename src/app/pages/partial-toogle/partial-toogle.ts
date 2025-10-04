import { Component, Signal } from '@angular/core';
import { FeatureToggleEnum } from '../../shared/enums/feature-toggle.enum';
import { FeatureToggleService } from './../../shared/services/feature-toggle.service';

@Component({
  selector: 'app-partial-toogle',
  imports: [],
  templateUrl: './partial-toogle.html',
  styleUrl: './partial-toogle.scss'
})
export class PartialToogle {
  public isFragmentNewEnabled: Signal<boolean>;
  public isFragmentImprovementEnabled: Signal<boolean>;

  constructor(private readonly _featureToggleService: FeatureToggleService) {
    this.isFragmentNewEnabled = this._featureToggleService.getToggle(FeatureToggleEnum.fragmentNew);
    this.isFragmentImprovementEnabled = this._featureToggleService.getToggle(FeatureToggleEnum.fragmentImprovement);
  }
}
