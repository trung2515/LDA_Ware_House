import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCharComponent } from './line-char.component';

describe('LineCharComponent', () => {
  let component: LineCharComponent;
  let fixture: ComponentFixture<LineCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
