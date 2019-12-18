import { TestBed, async, inject } from '@angular/core/testing';

import { LoginSuccessGuard } from './login-success.guard';

describe('LoginSuccessGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSuccessGuard]
    });
  });

  it('should ...', inject([LoginSuccessGuard], (guard: LoginSuccessGuard) => {
    expect(guard).toBeTruthy();
  }));
});
