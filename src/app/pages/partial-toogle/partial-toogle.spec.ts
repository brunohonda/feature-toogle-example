import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialToogle } from './partial-toogle';

describe('PartialToogle', () => {
  let component: PartialToogle;
  let fixture: ComponentFixture<PartialToogle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartialToogle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartialToogle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
