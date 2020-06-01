import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBeneficioComponent } from './landing-beneficio.component';

describe('LandingBeneficioComponent', () => {
  let component: LandingBeneficioComponent;
  let fixture: ComponentFixture<LandingBeneficioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBeneficioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBeneficioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
