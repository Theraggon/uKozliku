import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<any> {
    return this.http.get('assets/pizzas.json');
  }
  getExtraIngredients(): Observable<any> {
    return this.http.get('assets/extraIngredients.json');
  }
}
