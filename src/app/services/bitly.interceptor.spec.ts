import { TestBed } from '@angular/core/testing';

import { BitlyInterceptor } from './bitly.interceptor';

describe('BitlyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      BitlyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: BitlyInterceptor = TestBed.inject(BitlyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
