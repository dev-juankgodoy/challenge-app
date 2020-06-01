import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

import { Store } from '@ngrx/store';
import { AppStore } from '../app.reducer';

import {CambiaMensajeMensajeErrorAction, CambiaEstadoMensajeErrorAction} from '../app.actions';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clienteAPI = environment.api;
  

  constructor(
    private http:HttpClient,
    private store: Store<AppStore>,
  ) { }

  registraCliente(cliente) {
    const uri = `${this.clienteAPI}/cliente`;
    console.log(uri);
    return this.http.post(uri,cliente).pipe(
      map(resp => resp),
      catchError( err => {
        return throwError(this.manejarError(err));
      })
    );
  }

  manejarError(respuesta: HttpErrorResponse) {
    console.log(respuesta);

    const cambiaEstadoMensajeErrorAction = new CambiaEstadoMensajeErrorAction(true);
    

    let mensaje:string = '';
    

    if (respuesta.status === 400) {
      mensaje = respuesta.error.msjError;
    } else if (respuesta.status === 0){
      mensaje = 'Servidor de recepción de datos esta abajo. Por favor intentar más tarde';
    } else {
      mensaje = 'Ha ocurrido un error en la consulta. Por favor intentar más tarde';
    }

    const cambiaMensajeMensajeErrorAction = new CambiaMensajeMensajeErrorAction(mensaje);

    this.store.dispatch(cambiaEstadoMensajeErrorAction);
    this.store.dispatch(cambiaMensajeMensajeErrorAction);

    return throwError(respuesta);  
  }
}
