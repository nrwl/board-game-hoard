import { async, TestBed } from '@angular/core/testing';
import { StoreDataAccessCartModule } from './store-data-access-cart.module';

describe('StoreDataAccessCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreDataAccessCartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreDataAccessCartModule).toBeDefined();
  });
});
