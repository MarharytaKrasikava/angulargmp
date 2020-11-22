import { TestBed } from '@angular/core/testing';

import { VideoCoursesService } from './video-courses.service';

describe('VideoCoursesService', () => {
  let service: VideoCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
