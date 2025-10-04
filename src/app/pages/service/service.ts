import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, Signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SwapiService } from '../../shared/services/swapi.service';

@Component({
  selector: 'app-service',
  imports: [
    MatButtonModule,
    MatCardModule,
    AsyncPipe,
    JsonPipe,
  ],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {
  public people: Signal<any>;

  constructor(
    private readonly _swapiService: SwapiService,
  ) {
    this.people = this._swapiService.people
  }

  public requestPeople(): void {
    this._swapiService.getPeople();
  }
}
