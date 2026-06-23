import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabulateDescriptionPipe',
})
export class TabulateDescriptionPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string[] {
    return value.split('\n').map((line) => line.trim());
  }
}
