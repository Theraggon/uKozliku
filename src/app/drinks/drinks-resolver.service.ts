import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DrinksService } from './drinks.service';
import { Drinks } from './drinks.model';

@Injectable({ providedIn: 'root' })
export class DrinksResolver implements Resolve<Drinks> {
  constructor(private service: DrinksService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.service.getDrinks();
  }
}
