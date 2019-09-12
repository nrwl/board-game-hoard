import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent],
  exports: [CartComponent]
})
export class StoreFeatureCartModule {}
