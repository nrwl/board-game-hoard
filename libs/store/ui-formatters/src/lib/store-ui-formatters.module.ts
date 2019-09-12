import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from './currency.pipe';
import { RatingPipe } from './rating.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [CurrencyPipe, RatingPipe],
  exports: [CurrencyPipe, RatingPipe]
})
export class StoreUiFormattersModule {}
