import { TestBed, inject } from '@angular/core/testing';

import { VertionInfoService } from './vertion-info.service';

describe('VertionInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VertionInfoService]
    });
  });

  it('should be created', inject([VertionInfoService], (service: VertionInfoService) => {
    expect(service).toBeTruthy();
  }));
});
