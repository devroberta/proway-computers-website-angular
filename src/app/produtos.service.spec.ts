import { TestBed } from '@angular/core/testing';

import { ProdutosService } from './produtos.service';

describe('ProtudosService', () => {
  let service: ProdutosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
