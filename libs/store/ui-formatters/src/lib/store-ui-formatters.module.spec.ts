import { async, TestBed } from '@angular/core/testing';
import { StoreUiFormattersModule } from './store-ui-formatters.module';

describe('StoreUiFormattersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreUiFormattersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(StoreUiFormattersModule).toBeDefined();
  });
});
