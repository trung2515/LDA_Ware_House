import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeFiftyComponent } from './list-type-fifty.component';

describe('ListTypeFiftyComponent', () => {
  let component: ListTypeFiftyComponent;
  let fixture: ComponentFixture<ListTypeFiftyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeFiftyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeFiftyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
