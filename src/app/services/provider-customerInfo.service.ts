import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { splitAtColon } from '@angular/compiler/src/util';
import { CustomerInfoService } from './customer-info.service';
@Injectable()
export class ProviderCustomerInfoService {
  constructor(private clienteService: CustomerInfoService) { }
  public getAllClientes(): Observable<any> {
    const cbOK = (response: any) => {
      return response;
    };
    const cbError = (error: any) => {
      return throwError(error);
    };
    return this.clienteService.getAllClientes()
      .pipe(map(cbOK))
      .pipe(catchError(cbError));
  }
}
