import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roomFilter'
})
export class RoomFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (value.lenght == 0) return value;
    if (!args[0]) return value;

    let result = [];
    for (let item of value) {
       if ( item.name.includes(args[0]) || item.name.toLowerCase().includes(args[0])) {
         result.push(item);
       }
     }
     return result;
  }

}
