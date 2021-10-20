import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacketUnitComponent } from './packet-unit.component';

describe('PacketUnitComponent', () => {
  let component: PacketUnitComponent;
  let fixture: ComponentFixture<PacketUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacketUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PacketUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
