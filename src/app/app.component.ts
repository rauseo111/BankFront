import { Component, OnInit } from '@angular/core';
import { isEmpty } from 'rxjs/operators';
import { Cliente } from './interface/data';
import { ProviderCustomerInfoService } from './services/provider-customerInfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public data: Array<Cliente> = [];
  public swBloqueo: boolean = false;
  public messages: boolean = false;
  constructor(private clienteProvider: ProviderCustomerInfoService) { }
  ngOnInit(): void {
    this.listadoClientes();
  }
  listadoClientes = () => {
    const cbSuccess = (response: any) => {
      if (Object.values(response.clientes).length > 0) {
        this.data = response.clientes;
        this.messages = false;
      } else {
        this.messages = true;
      }
    };
    const cbFailure = (error: any) => {
      this.messages = true;
    };
    this.clienteProvider.getAllClientes().subscribe(cbSuccess, cbFailure);
  };
}
