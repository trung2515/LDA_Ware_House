import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackagingFiftyComponent } from './add-packaging-fifty.component';

describe('AddPackagingFiftyComponent', () => {
  let component: AddPackagingFiftyComponent;
  let fixture: ComponentFixture<AddPackagingFiftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPackagingFiftyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPackagingFiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
