import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, EMPTY, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ENDPOINTS } from '../constants/endpoints.const';
@Injectable({
  providedIn: 'root'
})
export class CustomerInfoService {
  private _endpoint = '';
  private _data: any = '';
  private _params: any = {};
  private _options: any = {};
  constructor(private _http: HttpClient
  ) {
  }
  private _cbFailure(error: Response) {
    console.log('error servicio: ', error);
    return throwError(error);
  }
  public getAllClientes(): Observable<any> {
    this._endpoint = ENDPOINTS.BANCO.GET_LIST_CLIENTES;
    this._params = {};
    this._options = {};
    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http.get(this._endpoint, headers)
      .pipe(catchError(this._cbFailure));
  }
}