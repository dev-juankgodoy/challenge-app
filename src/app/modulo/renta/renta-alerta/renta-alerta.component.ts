import { Component, OnInit } from '@angular/core';
import { AppStore } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { CambiaEstadoMensajeErrorAction, CambiaMensajeMensajeErrorAction } from '../../../app.actions';

@Component({
  selector: 'app-renta-alerta',
  templateUrl: './renta-alerta.component.html',
  styleUrls: ['./renta-alerta.component.css']
})
export class RentaAlertaComponent implements OnInit {

  state;

  alertaError:boolean = false;

  mensajeError:string;

  constructor(
    private store: Store<AppStore>
  ) {
    this.store.subscribe(state => {
      this.state = state;
      
      this.cambiaAlertaError();
      this.cambiaMensajeError();
    });
  }

  ngOnInit(): void {
  }

  

  cambiaAlertaError = () => {
    this.alertaError = this.state.estado.alerta.alertaError;
  }

  cambiaMensajeError = () => {
    this.mensajeError = this.state.estado.alerta.mensajeError;
  }

  cerrarAlertaError = () => {
    const cambiaEstadoMensajeErrorAction = new CambiaEstadoMensajeErrorAction(false);
    this.store.dispatch(cambiaEstadoMensajeErrorAction);

    const cambiaMensajeErrorAction = new CambiaMensajeMensajeErrorAction('');
    this.store.dispatch(cambiaMensajeErrorAction);

    this.alertaError = this.state.estado.alerta.alertaError;
  }

}
