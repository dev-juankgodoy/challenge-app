import { Action } from '@ngrx/store';

export const CAMBIA_RUT = '[Landing] CAMBIA_RUT';
export const CAMBIA_CELULAR = '[Landing] CAMBIA_CELULAR';
export const CAMBIA_CORREO = '[Landing] CAMBIA_CORREO';
export const CAMBIA_RENTA = '[Renta] CAMBIA_RENTA';
export const CAMBIA_ESTADO_EXITO_MENSAJE = '[Alerta] CAMBIA_ESTADO_EXITO_MENSAJE';
export const CAMBIA_ESTADO_ERROR_MENSAJE = '[Alerta] CAMBIA_ESTADO_ERROR_MENSAJE';
export const CAMBIA_MENSAJE_ERROR_MENSAJE = '[Alerta] CAMBIA_MENSAJE_ERROR_MENSAJE';
export const CAMBIA_MENSAJE_EXITO_MENSAJE = '[Alerta] CAMBIA_MENSAJE_EXITO_MENSAJE';
export const LIMPIAR_STORE = '[General] LIMPIAR STORE';

export class CambiaRUTAction implements Action {
    readonly type = CAMBIA_RUT;
    constructor(public payload: string) {}
}

export class CambiaCelularAction implements Action {
    readonly type = CAMBIA_CELULAR;
    constructor(public payload: string) {}
}

export class CambiaCorreoAction implements Action {
    readonly type = CAMBIA_CORREO;
    constructor(public payload: string) {}
}

export class CambiaRentaAction implements Action {
    readonly type = CAMBIA_RENTA;
    constructor(public payload: string) {}
}

export class CambiaEstadoMensajeExitoAction implements Action {
    readonly type = CAMBIA_ESTADO_EXITO_MENSAJE;
    constructor(public payload: boolean) {}
}

export class CambiaEstadoMensajeErrorAction implements Action {
    readonly type = CAMBIA_ESTADO_ERROR_MENSAJE;
    constructor(public payload: boolean) {}
}

export class CambiaMensajeMensajeErrorAction implements Action {
    readonly type = CAMBIA_MENSAJE_ERROR_MENSAJE;
    constructor(public payload: string) {}
}

export class CambiaMensajeExitoAction implements Action {
    readonly type = CAMBIA_MENSAJE_EXITO_MENSAJE;
    constructor(public payload: string) {}
}

export class LimpiarStoreAction implements Action {
    readonly type = LIMPIAR_STORE;
    constructor(public payload) {}
}



export type actions = CambiaRUTAction | CambiaCelularAction | CambiaCorreoAction | CambiaRentaAction | CambiaEstadoMensajeExitoAction | CambiaEstadoMensajeErrorAction | CambiaMensajeMensajeErrorAction | CambiaMensajeExitoAction | LimpiarStoreAction;