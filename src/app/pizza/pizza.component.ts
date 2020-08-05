import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.model';
import { ExtraIngredient } from './extraIngredient.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
})
export class PizzaComponent implements OnInit {
  pizzas: Pizza[];
  extraIngredients: ExtraIngredient[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(
      (data: { pizzas: Pizza[]; extras: ExtraIngredient[] }) => {
        console.log(data);
        this.pizzas = data.pizzas;
        this.extraIngredients = data.extras;
      }
    );
  }

  formatIngredients(ingredients: string[]) {
    return ingredients.join(', ');
  }
}
