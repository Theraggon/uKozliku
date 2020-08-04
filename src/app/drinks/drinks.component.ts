import { Component, OnInit } from '@angular/core';
import { DrinksService } from './drinks.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  drinks$ = this.drinksService.getDrinks().pipe(
    tap((drinks) => {
      console.log(drinks);
    })
  );

  currency = 'Kč';

  constructor(private drinksService: DrinksService) {}

  ngOnInit(): void {}
}
