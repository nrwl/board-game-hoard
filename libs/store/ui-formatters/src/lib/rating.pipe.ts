import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(rating: number, ...args: any[]): string {
    return (rating === undefined ? '?' : rating.toFixed(1)) + '/5';
  }

}
