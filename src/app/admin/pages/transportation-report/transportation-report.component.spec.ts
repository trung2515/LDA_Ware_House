import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationReportComponent } from './transportation-report.component';

describe('TransportationReportComponent', () => {
  let component: TransportationReportComponent;
  let fixture: ComponentFixture<TransportationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransportationReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
