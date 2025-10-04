import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-service',
  imports: [
    MatButtonModule,
    MatCardModule,
    JsonPipe,
  ],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {

}
