import { TestBed } from '@angular/core/testing';

import { ServicioPersonasService } from './servicio-personas.service';

describe('ServicioPersonasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioPersonasService = TestBed.get(ServicioPersonasService);
    expect(service).toBeTruthy();
  });
});
