import { TestBed } from '@angular/core/testing';

import { StatusRecieverService } from './status-reciever.service';

describe('StatusRecieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatusRecieverService = TestBed.get(StatusRecieverService);
    expect(service).toBeTruthy();
  });
});
