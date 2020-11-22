import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/shared/models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(courses: Course[], filterVal: string): Course[] {
    return courses.filter(course => course.title.toLowerCase().includes(filterVal.toLowerCase()));
  }

}
