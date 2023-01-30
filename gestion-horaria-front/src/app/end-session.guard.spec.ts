import { TestBed } from '@angular/core/testing';

import { EndSessionGuard } from './end-session.guard';

describe('EndSessionGuard', () => {
  let guard: EndSessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EndSessionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
