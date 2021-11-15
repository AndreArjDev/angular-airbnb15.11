import { Injectable } from '@angular/core';
import {Cep} from './ceps';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private http: HttpClient) {

   }
  getCep(cep:string){
    return this.http.get<Cep>('https://viacep.com.br/ws/'+ cep +'/json/');

  }
}