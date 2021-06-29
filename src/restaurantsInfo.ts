import { ReviewsInfo } from "./reviewsInfo";

export interface RestaurantsInfo{
  slug: string,
  name: string,
  description: string, 
  logo: string, 
  rating: number,
  reviews: Array<ReviewsInfo>
}