import { TestBed } from '@angular/core/testing';

import { Static2Service } from './static2.service';

describe('Static2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Static2Service = TestBed.get(Static2Service);
    expect(service).toBeTruthy();
  });
});
