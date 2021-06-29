import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestaurantComponent } from './Components/add-restaurant/add-restaurant.component';
import { CreateReviewComponent } from './Components/create-review/create-review.component';
import { ListRestaurantsComponent } from './Components/list-restaurants/list-restaurants.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-restaurants', pathMatch: 'full' },
  { path: 'list-restaurants', component: ListRestaurantsComponent },
  { path: 'create-review', component: CreateReviewComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: '**', redirectTo: 'list-restaurants', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ListRestaurantsComponent, CreateReviewComponent, AddRestaurantComponent ];
