import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TseleccionComponent } from './tseleccion.component';

describe('TseleccionComponent', () => {
  let component: TseleccionComponent;
  let fixture: ComponentFixture<TseleccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TseleccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TseleccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
