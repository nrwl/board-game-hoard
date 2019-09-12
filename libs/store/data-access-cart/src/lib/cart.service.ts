import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '@bghoard/api-interfaces';
import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CartService {
  private refresh$ = new BehaviorSubject({});
  private cart$ = this.refresh$.pipe(
    switchMap(() => this.httpClient.get<CartItem[]>('/api/cart'))
  );

  constructor(private httpClient: HttpClient) {}

  getCart() {
    this.refresh$.next({});
    return this.cart$;
  }

  addItemToCart(item: CartItem) {
    this.httpClient.post('/api/cart', item).subscribe();
    this.refresh$.next({});
  }

  updateItemInCart(item: CartItem) {
    this.httpClient.put('/api/cart', item).subscribe();
    this.refresh$.next({});
  }
}
