import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignmentManagementComponent } from './consignment-management.component';

describe('ConsignmentManagementComponent', () => {
  let component: ConsignmentManagementComponent;
  let fixture: ComponentFixture<ConsignmentManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsignmentManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
