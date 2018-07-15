import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TseleccionaComponent } from './tselecciona.component';

describe('TseleccionaComponent', () => {
  let component: TseleccionaComponent;
  let fixture: ComponentFixture<TseleccionaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TseleccionaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TseleccionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
