  import { TestBed } from '@angular/core/testing';

  import { EventsAPIService } from './events-api.service';

  describe('EventsAPIService', () => {
    let service: EventsAPIService;

    beforeEach(() => {
      TestBed.configureTestingModule({});
      service = TestBed.inject(EventsAPIService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });
