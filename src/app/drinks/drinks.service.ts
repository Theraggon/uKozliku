import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DrinksService {
  constructor(private http: HttpClient) {}

  getDrinks() {
    return this.http.get('assets/drinks.json');
  }
}
