import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { CambiaRUTAction, CambiaCelularAction, CambiaCorreoAction } from '../../../app.actions';
import { AppStore } from '../../../app.reducer';


@Component({
  selector: 'app-landing-form',
  templateUrl: './landing-form.component.html',
  styleUrls: ['./landing-form.component.css']
})
export class LandingFormComponent implements OnInit {

  formLanding: FormGroup

  mensajeValidacionRUT:string='El rut es requerido!!!';
  mensajeValidacionCelular:string='El celular es requerido!!!';
  mensajeValidacionCorreo:string='El correo es requerido!!!';

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppStore>
  ) {
    this.store.subscribe(state => {
      //console.log(state);
    });
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm() {
    this.formLanding = this.FormBuilder.group({
      rut: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required])
    });
  }

  continuar(event: Event) {
    event.preventDefault();
    if (this.formLanding.valid) {
      const valores = this.formLanding.value;

      console.log(valores);
      
      const rutAction = new CambiaRUTAction(valores.rut);
      const celularAction = new CambiaCelularAction(valores.celular);
      const correoAction = new CambiaCorreoAction(valores.correo);
      

      this.store.dispatch(rutAction);
      this.store.dispatch(celularAction);
      this.store.dispatch(correoAction);
      
      this.router.navigateByUrl('/renta');
      
    } else {
      this.formLanding.markAllAsTouched();
    }
    
  }

}
