import { Component, OnInit } from '@angular/core';
import { GamesService } from '@bghoard/store/data-access-games';

@Component({
  selector: 'bghoard-game-list',
  templateUrl: 'game-list.component.html',
  styleUrls: ['game-list.component.scss']
})
export class GameListComponent implements OnInit {
  games$ = this.gamesService.games$;
  constructor(private gamesService: GamesService) {}

  ngOnInit() {}
}
