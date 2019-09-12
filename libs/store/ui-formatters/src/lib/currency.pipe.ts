import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(amount: number, ...args: any[]): string {
    return '$' + amount.toFixed(2);
  }

}
