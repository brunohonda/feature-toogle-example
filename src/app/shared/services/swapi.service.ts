import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { FeatureToggleEnum } from '../enums/feature-toggle.enum';
import { FeatureToggleService } from './feature-toggle.service';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private _originFilm = signal<any>({});
  private _peopleId = 1;
  private _people = signal<any>({});

  constructor(
    private readonly _http: HttpClient,
    private readonly _featureToggleService: FeatureToggleService,
  ) { }

  get originFilm() {
    return this._originFilm.asReadonly();
  }

  get people() {
    return this._people.asReadonly();
  }

  public getPeople(): void {
    if(!this._featureToggleService.getToggle(FeatureToggleEnum.services)()) {
      this._peopleId = 1;
      this._people.set({
        code: 'error.code.error-message',
        message: 'Requisição bloqueada',
      });
      return
    }

    this._people.set({
        message: 'Carregando',
      });
    this._http
      .get(`https://swapi.dev/api/people/${ this._peopleId++ }/`)
      .pipe(
        map((data: any) => ({ name: data.name, originFilm: data.films[0] })),
        catchError((error: HttpErrorResponse) => of({
          code: error.status,
          message: error.error.detail || error.message,
        }))
      )
      .subscribe(data => this._people.set(data));
  }

  public getOriginFilm(): void {
    this._originFilm.set({
      message: 'Carregando',
    });
    if(this._featureToggleService.getToggle(FeatureToggleEnum.services)()) {
      this.getOriginFilmV2();
      return;
    }

    this.getOriginFilmV1();
  }

  private getOriginFilmV1(): void {
    this._http
      .get(this._people().originFilm)
      .pipe(
        map((data: any) => ({ episode: `Star Wars - Episode ${ data.episode_id }` })),
        catchError((error: HttpErrorResponse) => of({
          code: error.status,
          message: error.error.detail || error.message,
        }))
      )
      .subscribe((data: any) => this._originFilm.set(data));
  }

  private getOriginFilmV2(): void {
    if(!this._people().originFilm) {
      this._originFilm.set({
        code: 'error.code.error-message',
        message: 'Carregue um personagem antes',
      });
      return;
    }

    this._http
      .get(this._people().originFilm)
      .pipe(
        map((data: any) => ({ episode: `Star Wars - Episode ${ data.episode_id }`, opening_crawl: data.opening_crawl })),
        catchError((error: HttpErrorResponse) => of({
          code: error.status,
          message: error.error.detail || error.message,
        }))
      )
      .subscribe(data => this._originFilm.set(data));
  }
}
