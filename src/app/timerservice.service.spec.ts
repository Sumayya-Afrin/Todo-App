import { TestBed } from '@angular/core/testing';

import { TimerserviceService } from './timerservice.service';

describe('TimerserviceService', () => {
  let service: TimerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
