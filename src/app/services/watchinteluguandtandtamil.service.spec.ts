import { TestBed } from '@angular/core/testing';

import { WatchinteluguandtandtamilService } from './watchinteluguandtandtamil.service';

describe('WatchinteluguandtandtamilService', () => {
  let service: WatchinteluguandtandtamilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchinteluguandtandtamilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
