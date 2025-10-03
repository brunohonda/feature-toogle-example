import { Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeatureToogle as FeatureToogleEnum } from './shared/enums/feature-toogle';
import { FeatureToogle } from './shared/services/feature-toogle';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public features = Object.values(FeatureToogleEnum);
  public isNewFeatureEnabled: Signal<boolean>;

  constructor(
    private readonly _featureToogle: FeatureToogle
  ) {
    this.isNewFeatureEnabled = this._featureToogle.getToogle(FeatureToogleEnum.newFeature);
  }

  isFeatureEnabled(feature: string): boolean {
    return this._featureToogle.getToogle(feature as FeatureToogleEnum)();
  }

  updateFeatureToogle(feature: string, isEnabled: boolean): void {
    this._featureToogle.setFeatureToogle(feature as FeatureToogleEnum, isEnabled);
  }
}
