import { Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeatureToggleEnum } from './shared/enums/feature-toggle.enum';
import { FeatureToggleService } from './shared/services/feature-toggle.service';

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
  public FeatureToggleEnum = FeatureToggleEnum;
  public features = Object.values(FeatureToggleEnum);
  public isNewFeatureEnabled: Signal<boolean>;

  constructor(
    private readonly _featureToggle: FeatureToggleService
  ) {
    this.isNewFeatureEnabled = this._featureToggle.getToggle(FeatureToggleEnum.newFeature);
  }

  isFeatureEnabled(feature: string): boolean {
    return this._featureToggle.getToggle(feature as FeatureToggleEnum)();
  }

  resetFeatureToggles(): void {
    this._featureToggle.reset();
  }

  updateFeatureToggle(feature: string, isEnabled: boolean): void {
    this._featureToggle.setFeatureToggle(feature as FeatureToggleEnum, isEnabled);
  }
}
