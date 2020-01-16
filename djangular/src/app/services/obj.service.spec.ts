import { TestBed } from '@angular/core/testing';

import { ObjService } from './obj.service';

describe('ObjService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObjService = TestBed.get(ObjService);
    expect(service).toBeTruthy();
  });
});
