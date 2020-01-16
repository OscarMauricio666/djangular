import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObjService {

  constructor() {
    console.log('Servicio listo para usarse');
  }

  getObj(): Iobj[] {
    return [
    {
      title: 'Depositos',
      route: '/depositos',
      icon: 'account_balance'
    },
    {
      title: 'Articulos',
      route: '/articulos',
      icon: 'collections'
    }
  ];
}
}
export interface Iobj {
  title: string;
  route: string;
  icon: string;
}
