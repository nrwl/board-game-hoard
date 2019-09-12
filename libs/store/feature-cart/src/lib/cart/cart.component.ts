import { Component, OnInit } from '@angular/core';
import { CartService } from '@bghoard/store/data-access-cart';
import { GamesService } from '@bghoard/store/data-access-games';
import { map, switchMap, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'bghoard-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.scss']
})
export class CartComponent implements OnInit {
  cart$ = this.cartService.getCart().pipe(
    withLatestFrom(this.gamesService.games$),
    map(([cart, games]) =>
      cart.map(item => ({
        game: games.find(g => g.id === item.game),
        quantity: item.quantity
      }))
    )
  );

  constructor(
    private cartService: CartService,
    private gamesService: GamesService
  ) {}

  ngOnInit() {}

  checkout() {
    window.alert('You checked out!');
  }

  removeItem(gameId: string) {
    this.cartService.updateItemInCart({ game: gameId, quantity: 0 });
  }
}
