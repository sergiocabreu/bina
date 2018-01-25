import { TestBed, inject } from '@angular/core/testing';

import { BinaService } from './bina.service';

describe('BinaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BinaService]
    });
  });

  it('should be created', inject([BinaService], (service: BinaService) => {
    expect(service).toBeTruthy();
  }));
});
