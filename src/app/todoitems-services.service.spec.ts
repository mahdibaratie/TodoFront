import { TestBed } from '@angular/core/testing';

import { TodoServicesService } from './todoitems-services.service';

describe('PersonServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TodoServicesService = TestBed.get(TodoServicesService);
    expect(service).toBeTruthy();
  });
});
