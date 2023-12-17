import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber',
})
export class RoundNumberPipe implements PipeTransform {
  transform(value: any): number {
    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue)) {
      return +parsedValue.toFixed(1);
    } else {
      return 0;
    }
  }
}
