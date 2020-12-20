import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/shared/models';
import { VideoCoursesService } from '../../services/video-courses-service/video-courses.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  constructor(private cousesService: VideoCoursesService) {}

  public transform(courses: Course[], filterVal: string): Course[] {
    return courses.filter(course => course.name.includes(filterVal) || course.description.includes(filterVal));
  }

}
