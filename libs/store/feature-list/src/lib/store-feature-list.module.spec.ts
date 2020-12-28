import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreFeatureListModule } from './store-feature-list.module';

describe('StoreFeatureListModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreFeatureListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreFeatureListModule).toBeDefined();
  });
});
