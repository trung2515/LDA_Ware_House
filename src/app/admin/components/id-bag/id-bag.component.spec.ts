import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdBagComponent } from './id-bag.component';

describe('IdBagComponent', () => {
  let component: IdBagComponent;
  let fixture: ComponentFixture<IdBagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdBagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
