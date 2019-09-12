import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartItem } from '@bghoard/api-interfaces';
import { CartService } from '@bghoard/store/data-access-cart';
import { GamesService } from '@bghoard/store/data-access-games';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'bghoard-game-details',
  templateUrl: 'game-details.component.html',
  styleUrls: ['game-details.component.scss']
})
export class GameDetailsComponent implements OnInit {
  game$ = this.route.params.pipe(
    switchMap(({ game }) => this.gamesService.getGame(game))
  );

  constructor(
    private route: ActivatedRoute,
    private gamesService: GamesService,
    private cartService: CartService
  ) {}

  ngOnInit() {}

  addToCart(item: CartItem) {
    this.cartService.addItemToCart(item);
  }
}
