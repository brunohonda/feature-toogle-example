import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteGuardBlock } from './route-guard-block';

describe('RouteGuardBlock', () => {
  let component: RouteGuardBlock;
  let fixture: ComponentFixture<RouteGuardBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouteGuardBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteGuardBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
