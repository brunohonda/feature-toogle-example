import { Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeatureToogle as FeatureToogleEnum } from './shared/enums/feature-toogle';
import { FeatureToogle } from './shared/services/feature-toogle';

@Component({
  selector: 'app-root',
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public isNewFeatureEnabled: Signal<boolean>;

  constructor(
    _featureToogle: FeatureToogle
  ) {
    this.isNewFeatureEnabled = _featureToogle.getToogle(FeatureToogleEnum.newFeature);
  }
}
