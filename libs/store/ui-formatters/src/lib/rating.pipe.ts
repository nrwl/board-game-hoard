import { Pipe, PipeTransform } from '@angular/core';
import { ratingFormat } from '@bghoard/shared/util-formatters';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rating: number, ...args: any[]): string {
    return ratingFormat(rating, 5);
  }

}
