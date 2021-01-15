import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { VideoCoursesService } from 'src/app/shared/services/video-courses-service/video-courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public searchIcon: IconDefinition = faSearch;
  public inputValue: string = '';

  constructor(private coursesService: VideoCoursesService) {}

  public searchCourses(): void {
    if (this.inputValue.length >= 3) {
      this.coursesService.searchValue.next(this.inputValue);
    }
  }
}
