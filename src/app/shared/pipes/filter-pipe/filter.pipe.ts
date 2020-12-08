import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models';
import { VideoCoursesService } from '../../services/video-courses-service/video-courses.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private cousesService: VideoCoursesService) {}

  public transform(filterVal: string): Observable<Course[]> {
    return this.cousesService.getCourses(0, undefined, filterVal);
  }

}
