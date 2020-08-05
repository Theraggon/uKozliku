import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { DrinksResolver } from './drinks/drinks-resolver.service';
import { DrinksComponent } from './drinks/drinks.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PizzaResolver } from './pizza/pizza-resolver.service';
import { PizzaComponent } from './pizza/pizza.component';
import { ExtrasResolver } from './pizza/extras-resolver.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  {
    path: 'pizza',
    component: PizzaComponent,
    resolve: {
      pizzas: PizzaResolver,
      extras: ExtrasResolver,
    },
  },
  {
    path: 'drinks',
    component: DrinksComponent,
    resolve: {
      drinks: DrinksResolver,
    },
  },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'career', component: CareerComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
