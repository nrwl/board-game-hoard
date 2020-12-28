import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreFeatureCartModule } from './store-feature-cart.module';

describe('StoreFeatureCartModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreFeatureCartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreFeatureCartModule).toBeDefined();
  });
});
