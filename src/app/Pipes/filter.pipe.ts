import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultRestaurant = [];
    for(const item of value){
      if(item.name.indexOf(arg) > -1){
         resultRestaurant.push(item);
      };
    };
    return resultRestaurant;
  }

}
