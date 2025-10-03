import { TestBed } from '@angular/core/testing';

import { FeatureToogle } from './feature-toogle';

describe('FeatureToogle', () => {
  let service: FeatureToogle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureToogle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
