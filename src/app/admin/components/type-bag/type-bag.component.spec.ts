import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeBagComponent } from './type-bag.component';

describe('TypeBagComponent', () => {
  let component: TypeBagComponent;
  let fixture: ComponentFixture<TypeBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
