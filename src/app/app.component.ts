import { Component, OnInit } from '@angular/core';
import { Cliente } from './interface/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: Array<Cliente> = [
    {
      id: '1',
      rut: '26.247.043-1',
      nombre: 'LEONARDO JOSE',
      tipo_cuenta: 'CORRIENTE',
      numerocuenta: '023181844484848455'
    },
    {
      id: '2',
      rut: '19.202.480-3',
      nombre: 'INES VALENZUELA',
      tipo_cuenta: 'AHORRO',
      numerocuenta: '001284848484848444'
    }
  ];
  ngOnInit(): void {
    console.log('data: ', this.data);
  }

}
