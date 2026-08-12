import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: string) {
    // if(!searchTerm) return;

    return value.filter((e:any)=> {
      return e.productName.toLowerCase().includes(searchTerm.toLowerCase())
    })
  }

}
