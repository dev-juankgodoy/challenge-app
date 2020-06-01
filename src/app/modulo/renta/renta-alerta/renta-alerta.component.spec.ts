import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentaAlertaComponent } from './renta-alerta.component';

describe('RentaAlertaComponent', () => {
  let component: RentaAlertaComponent;
  let fixture: ComponentFixture<RentaAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentaAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentaAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
