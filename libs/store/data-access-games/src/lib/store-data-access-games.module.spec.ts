import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreDataAccessGamesModule } from './store-data-access-games.module';

describe('StoreDataAccessGamesModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreDataAccessGamesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreDataAccessGamesModule).toBeDefined();
  });
});
