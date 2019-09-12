import { async, TestBed } from '@angular/core/testing';
import { StoreDataAccessGamesModule } from './store-data-access-games.module';

describe('StoreDataAccessGamesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreDataAccessGamesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreDataAccessGamesModule).toBeDefined();
  });
});
