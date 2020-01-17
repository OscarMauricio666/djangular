import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/common/http';
import { Deposito } from '../dataservice/deposito';


@Injectable()
export class dataService {

    constructor(private http: Http ) { }

    private headers = new Headers({'Content-Type': 'application/json'});

    getDepositos(): Promise<Deposito[]> {
        return this.http.get('http://localhost:8000/deposito?format=json', {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Deposito[])
    }
    getArticulos(): Promise<Articulos[]> {
        return this.http.get('http://localhost:8000/articulos?format=json', {headers: this.headers})
            .toPromise()
            .then(response => response.json() as Articulos[])
    }
    deleteDeposito(id: number): Promise<void> {
        const url = `${"http://localhost:8000/deposito"}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
    }
    deleteArticulo(id: number): Promise<void> {
        const url = `${"http://localhost:8000/articulo"}/${id}`;
        return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
    }
    createDeposito(d: Deposito): Promise<Deposito> {
        return this.http
        .post("http://localhost:8000/deposito", JSON.stringify(d), {headers: this.headers})
        .toPromise()
        .then(res => res.json() as Deposito)
    }

}