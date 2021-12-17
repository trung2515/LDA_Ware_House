import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchOrderComponent } from './research-order.component';

describe('ResearchOrderComponent', () => {
  let component: ResearchOrderComponent;
  let fixture: ComponentFixture<ResearchOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
