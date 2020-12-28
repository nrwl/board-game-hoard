import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreUiFormattersModule } from './store-ui-formatters.module';

describe('StoreUiFormattersModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [StoreUiFormattersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreUiFormattersModule).toBeDefined();
  });
});
