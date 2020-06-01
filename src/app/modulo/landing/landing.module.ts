import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingFormComponent } from './landing-form/landing-form.component';
import { LandingLayoutComponent } from './landing-layout/landing-layout.component';
import { LandingAlertaComponent } from './landing-alerta/landing-alerta.component';
import { LandingNavbarComponent } from './landing-navbar/landing-navbar.component';
import { LandingBeneficioComponent } from './landing-beneficio/landing-beneficio.component';


@NgModule({
  declarations: [LandingFormComponent, LandingLayoutComponent, LandingAlertaComponent, LandingNavbarComponent, LandingBeneficioComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    ReactiveFormsModule
  ]
})
export class LandingModule { }
