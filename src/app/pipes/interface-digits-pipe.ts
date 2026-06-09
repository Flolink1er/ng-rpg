import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'interfaceDigits',
  standalone: true,
})
export class InterfaceDigitsPipe implements PipeTransform {
  public transform(value: number, digits = 0): number {
    if (value > 0 && value < 1) {
      return 1;
    } else if (value < 0) {
      return 0;
    } else {
      return +value.toFixed(digits);
    }
  }
}
