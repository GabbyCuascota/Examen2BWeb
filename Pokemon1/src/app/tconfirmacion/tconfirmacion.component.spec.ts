import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TconfirmacionComponent } from './tconfirmacion.component';

describe('TconfirmacionComponent', () => {
  let component: TconfirmacionComponent;
  let fixture: ComponentFixture<TconfirmacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TconfirmacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TconfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
