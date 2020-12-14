import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(value: any, searchtext: string): any {
   
    if(!value)return []; //if no user was there it should return empty array instead of null
    if(!searchtext) return value;
    return value.filter((user)=>
    {
     // return user.toLowerCase().includes(searchtext);
      return user['firstname'].toLowerCase().includes((searchtext).toLowerCase());  
      });
  }

}
