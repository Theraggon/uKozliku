import { Component, OnInit } from '@angular/core';
import { DrinksService } from './drinks.service';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Drinks } from './drinks.model';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss'],
})
export class DrinksComponent implements OnInit {
  drinks: Drinks;

  currency = 'Kč';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: { drinks: Drinks }) => {
      console.log(data);
      this.drinks = data.drinks;
    });
  }
}
