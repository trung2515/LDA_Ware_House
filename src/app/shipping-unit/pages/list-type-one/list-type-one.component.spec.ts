import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeOneComponent } from './list-type-one.component';

describe('ListTypeOneComponent', () => {
  let component: ListTypeOneComponent;
  let fixture: ComponentFixture<ListTypeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
