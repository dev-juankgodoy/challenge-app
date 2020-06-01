import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAlertaComponent } from './landing-alerta.component';

describe('LandingAlertaComponent', () => {
  let component: LandingAlertaComponent;
  let fixture: ComponentFixture<LandingAlertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingAlertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingAlertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
