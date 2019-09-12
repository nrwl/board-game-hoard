import { async, TestBed } from '@angular/core/testing';
import { StoreFeatureDetailsModule } from './store-feature-details.module';

describe('StoreFeatureDetailsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreFeatureDetailsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreFeatureDetailsModule).toBeDefined();
  });
});
