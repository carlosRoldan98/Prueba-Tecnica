import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api/api.service';


@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent implements OnInit {

  restaurants: any[] = [];
  filterrestaurant = '';
  

  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  saveRestaurant(){
    const newRestaurant = { name: 'Carls Jr', description: 'Comida Rapida', rating: 3, food_type: ['b28f3700-126a-434a-99b0-f418523624dd'] };
    this.apiService.addRestaurant(newRestaurant).subscribe(body => console.log(body))
  }

  onSubmit(data: any) {
    console.log(data)
    this.apiService.addRestaurant(data).subscribe(body => this.restaurants.push(body));
  }


}
