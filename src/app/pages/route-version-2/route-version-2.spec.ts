import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteVersion2 } from './route-version-2';

describe('RouteVersion2', () => {
  let component: RouteVersion2;
  let fixture: ComponentFixture<RouteVersion2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteVersion2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteVersion2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
