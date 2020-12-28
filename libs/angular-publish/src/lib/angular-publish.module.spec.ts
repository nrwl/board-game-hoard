import { TestBed, waitForAsync } from '@angular/core/testing';
import { AngularPublishModule } from './angular-publish.module';

describe('AngularPublishModule', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AngularPublishModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularPublishModule).toBeDefined();
  });
});
