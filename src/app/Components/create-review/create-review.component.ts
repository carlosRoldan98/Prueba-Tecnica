import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api/api.service';


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {

  reviews: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getReviews().subscribe(data => {
      this.reviews = data;
    });
  }

  onSubmit(data: any) {
    this.apiService.addReview(data).subscribe(body => this.reviews.push(body));
  }

}
