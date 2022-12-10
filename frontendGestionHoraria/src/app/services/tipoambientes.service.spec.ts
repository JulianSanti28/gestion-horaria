import { TestBed } from '@angular/core/testing';

import { TipoambientesService } from './tipoambientes.service';

describe('TipoambientesService', () => {
  let service: TipoambientesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoambientesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
