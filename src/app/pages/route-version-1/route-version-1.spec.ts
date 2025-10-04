import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteVersion1 } from './route-version-1';

describe('RouteVersion1', () => {
  let component: RouteVersion1;
  let fixture: ComponentFixture<RouteVersion1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteVersion1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteVersion1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
