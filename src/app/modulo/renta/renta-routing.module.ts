import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentaLayoutComponent } from './renta-layout/renta-layout.component';

const routes: Routes = [
  {
    path: '', 
    component: RentaLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentaRoutingModule { }
