import { Pipe, PipeTransform } from '@angular/core';
import { Course } from 'src/app/shared/models';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  public transform(values: Course[]): Course[] {
    return [...values].sort((a, b) => (a.creationDate.getTime() - b.creationDate.getTime()));
  }

}
