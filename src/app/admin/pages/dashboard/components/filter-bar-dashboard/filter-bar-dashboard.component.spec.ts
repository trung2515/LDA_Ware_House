import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBarDashboardComponent } from './filter-bar-dashboard.component';

describe('FilterBarDashboardComponent', () => {
  let component: FilterBarDashboardComponent;
  let fixture: ComponentFixture<FilterBarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterBarDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
