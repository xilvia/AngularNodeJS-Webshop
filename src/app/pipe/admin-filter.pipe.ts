import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminFilter'
})
export class AdminFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
