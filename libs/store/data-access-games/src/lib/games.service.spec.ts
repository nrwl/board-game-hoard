import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { GamesService } from './games.service';

describe('GamesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: GamesService = TestBed.get(GamesService);
    expect(service).toBeTruthy();
  });
});
