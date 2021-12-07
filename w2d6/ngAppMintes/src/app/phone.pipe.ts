import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: string): unknown {
    return `+1 ${value.replace(/-/gi,"")}`;
  }

}
