import { Component, OnInit } from '@angular/core';
import { Deposito } from '../dataservice/deposito';
import { dataService } from '../services/data.service';

@Component({
  selector: 'app-depositos',
  templateUrl: './depositos.component.html',
  styleUrls: ['./depositos.component.css']
})
export class DepositosComponent implements OnInit {

  depositos: Deposito[];

  getDepositos(): void {
    this.dataService
      .getDepositos()
      .then(depositos => this.depositos = depositos );
   n   }
  delete(depo): void {
    this.dataService.deleteDeposito(depo.id);
    this.depositos = this.depositos.filter(d => d !== depo );
  }
  constructor( private dataService: dataService) { }

  ngOnInit() {
    this.getDepositos();
  }

}
