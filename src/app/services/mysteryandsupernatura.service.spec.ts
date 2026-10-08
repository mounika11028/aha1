import { TestBed } from '@angular/core/testing';

import { MysteryandsupernaturaService } from './mysteryandsupernatura.service';

describe('MysteryandsupernaturaService', () => {
  let service: MysteryandsupernaturaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MysteryandsupernaturaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
