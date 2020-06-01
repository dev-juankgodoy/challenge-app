import { Component, OnInit } from '@angular/core';
import { AppStore } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { CambiaEstadoMensajeExitoAction, CambiaMensajeExitoAction, CambiaEstadoMensajeErrorAction, CambiaMensajeMensajeErrorAction } from '../../../app.actions';

@Component({
  selector: 'app-landing-alerta',
  templateUrl: './landing-alerta.component.html',
  styleUrls: ['./landing-alerta.component.css']
})
export class LandingAlertaComponent implements OnInit {

  state;

  alertaExito:boolean = false;

  mensajeExito:string = 'Se han enviado sus datos exitosamente.';
  
  constructor(
    private store: Store<AppStore>
  ) { 
    this.store.subscribe(state => {
      this.state = state;
      
      this.cambiaAlertaExito();
      
    });
  }

  ngOnInit(): void {
  }

  cambiaAlertaExito = () => {
    this.alertaExito = this.state.estado.alerta.alertaExito;
  }

  cerrarAlertaExito = () => {
    const cambiaEstadoMensajeExitoAction = new CambiaEstadoMensajeExitoAction(false);
    this.store.dispatch(cambiaEstadoMensajeExitoAction);

    const cambiaMensajeExitoAction = new CambiaMensajeExitoAction('');
    this.store.dispatch(cambiaMensajeExitoAction);

    this.alertaExito = this.state.estado.alerta.alertaExito;
  }

}
