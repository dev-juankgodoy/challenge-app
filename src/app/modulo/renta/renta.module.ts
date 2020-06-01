import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RentaRoutingModule } from './renta-routing.module';
import { RentaFormComponent } from './renta-form/renta-form.component';
import { RentaLayoutComponent } from './renta-layout/renta-layout.component';
import { RentaNavbarComponent } from './renta-navbar/renta-navbar.component';
import { RentaAlertaComponent } from './renta-alerta/renta-alerta.component';


@NgModule({
  declarations: [RentaFormComponent, RentaLayoutComponent, RentaNavbarComponent, RentaAlertaComponent],
  imports: [
    CommonModule,
    RentaRoutingModule,
    ReactiveFormsModule
  ]
})
export class RentaModule { }
