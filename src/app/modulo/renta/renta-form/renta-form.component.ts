import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Store } from '@ngrx/store';
import { CambiaRentaAction, CambiaEstadoMensajeExitoAction, CambiaMensajeExitoAction, LimpiarStoreAction } from '../../../app.actions';
import { AppStore } from '../../../app.reducer';
import { ClienteService } from '../../../servicio/cliente.service';



interface respuestaCliente {
  "msg": string
}

@Component({
  selector: 'app-renta-form',
  templateUrl: './renta-form.component.html',
  styleUrls: ['./renta-form.component.css']
})
export class RentaFormComponent implements OnInit {
  
  formRenta: FormGroup;

  state;

  mensajeValidacionRenta:string='La renta es requerida!!!';

  constructor(
    private FormBuilder: FormBuilder,
    private router: Router,
    private store: Store<AppStore>,
    private clienteService:ClienteService
  ) {
    this.store.subscribe(state => {
      this.state = state;
    });
    this.buildForm();
  }
  

  ngOnInit(): void {
  }

  private buildForm() {
    this.formRenta = this.FormBuilder.group({
      renta: new FormControl('', [Validators.required])
    });
  }

  

  continuar(event: Event) {
    event.preventDefault();
    if (this.formRenta.valid) {
      const valores = this.formRenta.value;

      console.log(valores);
      
      const rentaAction = new CambiaRentaAction(valores.renta);
      
      this.store.dispatch(rentaAction);
      
      this.clienteService.registraCliente(this.state.estado.cliente)
      .subscribe((respuesta:respuestaCliente) => {
        const estadoMensajeExitoAction = new CambiaEstadoMensajeExitoAction(true); 
        const cambiaMensajeExitoAction = new CambiaMensajeExitoAction(respuesta.msg);
        const limpiarStoreAction = new LimpiarStoreAction(true);
        
        this.store.dispatch(estadoMensajeExitoAction);
        this.store.dispatch(cambiaMensajeExitoAction);
        this.store.dispatch(limpiarStoreAction);

        this.router.navigateByUrl('/');
      }, (err) => {
        console.log('Error al consumir servicio');
      });
      
    } else {
      this.formRenta.markAllAsTouched();
    }
    
  }
    
  

}
