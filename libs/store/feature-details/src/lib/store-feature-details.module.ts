import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreUiFormattersModule } from '@bghoard/store/ui-formatters';
import { GameDetailsComponent } from './game-details/game-details.component';

@NgModule({
  imports: [
    CommonModule,

    StoreUiFormattersModule,
    RouterModule.forChild([
      {path: ':game', component: GameDetailsComponent}
    ])
  ],
  declarations: [GameDetailsComponent]
})
export class StoreFeatureDetailsModule {}
