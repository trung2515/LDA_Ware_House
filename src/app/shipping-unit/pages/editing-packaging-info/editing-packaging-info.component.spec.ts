import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditingPackagingInfoComponent } from './editing-packaging-info.component';

describe('EditingPackagingInfoComponent', () => {
  let component: EditingPackagingInfoComponent;
  let fixture: ComponentFixture<EditingPackagingInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditingPackagingInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditingPackagingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
