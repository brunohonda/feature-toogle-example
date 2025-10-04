import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { map } from 'rxjs';
import { FeatureToggleEnum } from '../enums/feature-toggle.enum';
import { FeatureToggleService } from './feature-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private _peopleId = 1;
  private _people = signal<any>({});

  constructor(
    private readonly _http: HttpClient,
    private readonly _featureToggleService: FeatureToggleService,
  ) { }

  get people() {
    return this._people.asReadonly();
  }

  getPeople(): void {
    if(!this._featureToggleService.getToggle(FeatureToggleEnum.services)()) {
      this._peopleId = 1;
      this._people.set({
        code: 'error.code.error-message',
        message: 'Error message',
      });
      return
    }

    this._http
      .get(`https://swapi.dev/api/people/${ this._peopleId++ }/`)
      .pipe(
        map((data: any) => ({ name: data.name, height: data.height, mass: data.mass })),
      )
      .subscribe(data => this._people.set(data));
  }
}
