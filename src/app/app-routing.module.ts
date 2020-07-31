import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DrinksComponent } from './drinks/drinks.component';
import { PizzaComponent } from './pizza/pizza.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'pizza', component: PizzaComponent },
  { path: 'drinks', component: DrinksComponent },
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
