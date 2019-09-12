import { async, TestBed } from '@angular/core/testing';
import { StoreFeatureCartModule } from './store-feature-cart.module';

describe('StoreFeatureCartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreFeatureCartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreFeatureCartModule).toBeDefined();
  });
});
