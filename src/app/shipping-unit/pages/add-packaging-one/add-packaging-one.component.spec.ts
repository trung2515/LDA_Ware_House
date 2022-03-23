import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagingOneComponent } from './add-packaging-one.component';

describe('AddPackagingOneComponent', () => {
  let component: AddPackagingOneComponent;
  let fixture: ComponentFixture<AddPackagingOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackagingOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackagingOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
