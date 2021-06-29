import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api/api.service';
import { RestaurantsInfo } from 'src/restaurantsInfo';


@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})

export class ListRestaurantsComponent implements OnInit {

  restaurants: Array<RestaurantsInfo> = [];

  constructor(private apiService: ApiService) { 
    this.apiService.getResturants().subscribe((resp:any)=>{
      console.log(resp)
      this.restaurants = resp;
    })
  }

  ngOnInit(){

  }
   

}
