import { TestBed } from '@angular/core/testing';

import { PokemonBackendService } from './pokemon-backend.service';

describe('PokemonBackendService', () => {
  let service: PokemonBackendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonBackendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
