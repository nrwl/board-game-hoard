import { async, TestBed } from '@angular/core/testing';
import { AngularPublishModule } from './angular-publish.module';

describe('AngularPublishModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularPublishModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularPublishModule).toBeDefined();
  });
});
