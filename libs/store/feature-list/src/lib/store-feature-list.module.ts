import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreUiFormattersModule } from '@bghoard/store/ui-formatters';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  imports: [
    CommonModule,

    StoreUiFormattersModule,
    RouterModule.forChild([
      {path: '', pathMatch: 'full', component: GameListComponent}
    ])
  ],
  declarations: [GameListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StoreFeatureListModule {}
