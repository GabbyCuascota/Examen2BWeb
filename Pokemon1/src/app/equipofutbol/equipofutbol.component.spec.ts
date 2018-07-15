import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipofutbolComponent } from './equipofutbol.component';

describe('EquipofutbolComponent', () => {
  let component: EquipofutbolComponent;
  let fixture: ComponentFixture<EquipofutbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipofutbolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipofutbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
