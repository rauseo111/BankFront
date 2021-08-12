import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as sHttp from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements sHttp.HttpInterceptor {
  constructor() { }
  intercept(req: sHttp.HttpRequest<any>, next: sHttp.HttpHandler): Observable<sHttp.HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: sHttp.HttpErrorResponse) => {
        const ResponseGeneral = {
          codigoEstado: 500,
          glosaEstado: 'Se ha producido un error en nuestro servicios. Intente mas tarde.'
        };
        console.log('Interceptor: ', error['status']);
        if (error['status'] === 500 || error['status'] === 400 || error['status'] === 404 || error['status'] === 403) {
          ResponseGeneral.codigoEstado = error['status'];
          ResponseGeneral.glosaEstado = 'Se ha producido un error de comunicación con uno de los servicios que consume la aplicación. Intente nuevamente.';
        } else if (error['status'] === 401) {
          ResponseGeneral.codigoEstado = error['status'];
          ResponseGeneral.glosaEstado = 'Token expirado';
        } else {
          ResponseGeneral.codigoEstado = error['status'];
          ResponseGeneral.glosaEstado = 'Se ha producido un error de comunicación con uno de los servicios que consume la aplicación. Intente nuevamente.';
        }
        return throwError(ResponseGeneral);
      }));
  }
}
