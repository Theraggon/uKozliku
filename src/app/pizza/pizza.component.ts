import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.model';
import { ExtraIngredient } from './extraIngredient.model';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent implements OnInit {
  pizzas$: Observable<Pizza> = this.pizzaService.getPizzas().pipe(
    tap((pizzas) => {
      console.log(pizzas);
    })
  );
  extraIngredients$: Observable<
    ExtraIngredient
  > = this.pizzaService.getExtraIngredients().pipe(
    tap((ingredients) => {
      console.log(ingredients);
    })
  );

  currency = 'Kč';

  constructor(private pizzaService: PizzaService) {}

  ngOnInit(): void {}

  formatIngredients(ingredients: string[]) {
    return ingredients.join(', ');
  }
}
