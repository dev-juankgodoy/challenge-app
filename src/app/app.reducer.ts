import { Action } from '@ngrx/store';
import { CAMBIA_RUT, CAMBIA_CELULAR, CAMBIA_CORREO, CAMBIA_RENTA, CAMBIA_ESTADO_EXITO_MENSAJE, CAMBIA_ESTADO_ERROR_MENSAJE, CAMBIA_MENSAJE_EXITO_MENSAJE, CAMBIA_MENSAJE_ERROR_MENSAJE, LIMPIAR_STORE ,actions} from './app.actions';
import { ɵangular_packages_platform_browser_dynamic_platform_browser_dynamic_a } from '@angular/platform-browser-dynamic';


export interface AppStore {
    cliente: {
        rut: string,
        celular: string,
        correo: string,
        renta: string
    },
    alerta: {
        alertaExito: boolean,
        alertaError: boolean,
        mensajeExito: string,
        mensajeError: string
    }    
}

export const initialState = {
    cliente: {
        rut: null,
        celular: null,
        correo: null,
        renta: null
    },
    alerta: {
        alertaExito: false,
        alertaError: false,
        mensajeExito: '',
        mensajeError: ''
    }       
};

export function appReducer(state=initialState,  action: actions) {
    switch (action.type) {

        case CAMBIA_RUT: 
            return {
                ...state,
                cliente: {
                    ...state.cliente,
                    rut: action.payload
                }
            };

        case CAMBIA_CELULAR:
            return {
                ...state,
                cliente: {
                    ...state.cliente,
                    celular: action.payload
                }
            };
        case CAMBIA_CORREO:
            return {
                ...state,
                cliente: {
                    ...state.cliente,
                    correo: action.payload
                }
            };
        case CAMBIA_RENTA:
            return {
                ...state,
                cliente: {
                    ...state.cliente,
                    renta: action.payload
                }
            };    
        case CAMBIA_ESTADO_EXITO_MENSAJE:
            return {
                ...state,
                alerta: {
                    ...state.alerta,
                    alertaExito: action.payload
                }
            };        
        case CAMBIA_ESTADO_ERROR_MENSAJE:
            return {
                ...state,
                alerta: {
                    ...state.alerta,
                    alertaError: action.payload
                }
            };            
        case CAMBIA_MENSAJE_EXITO_MENSAJE:
            return {
                ...state,
                alerta: {
                    ...state.alerta,
                    mensajeExito: action.payload
                }
            };
        case CAMBIA_MENSAJE_ERROR_MENSAJE:
            return {
                ...state,
                alerta: {
                    ...state.alerta,
                    mensajeError: action.payload
                }
            };
        case LIMPIAR_STORE:
            return {
                ...state,
                cliente: {
                    rut: null,
                    celular: null,
                    correo: null,
                    renta: null
                }
            };                        
        default:
            return {
                ...state
            };
    }
}