import { TestBed } from '@angular/core/testing';

import { WarehouseReportService } from './warehouse-report.service';

describe('WarehouseReportService', () => {
  let service: WarehouseReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarehouseReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
