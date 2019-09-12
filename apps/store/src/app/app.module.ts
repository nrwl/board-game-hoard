import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'store-feature-list',
          loadChildren: () =>
            import('@bghoard/store/feature-list').then(
              module => module.StoreFeatureListModule
            )
        },
        {
          path: 'store-feature-details',
          loadChildren: () =>
            import('@bghoard/store/feature-details').then(
              module => module.StoreFeatureDetailsModule
            )
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
