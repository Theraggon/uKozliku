import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { PizzaService } from '../pizza/pizza.service';
import { ExtraIngredient } from './extraIngredient.model';

@Injectable({ providedIn: 'root' })
export class ExtrasResolver implements Resolve<ExtraIngredient[]> {
  constructor(private service: PizzaService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getExtraIngredients();
  }
}
