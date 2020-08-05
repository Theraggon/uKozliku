import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PizzaService } from '../pizza/pizza.service';
import { Pizza } from './pizza.model';

@Injectable({ providedIn: 'root' })
export class PizzaResolver implements Resolve<Pizza[]> {
  constructor(private service: PizzaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getPizzas();
  }
}
