import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSearch, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { VideoCoursesService } from 'src/app/shared/services/video-courses-service/video-courses.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  public searchIcon: IconDefinition = faSearch;
  @ViewChild('form') public searchForm: NgForm;
  constructor(private coursesService: VideoCoursesService) {}

  public searchCourses(): void {
    this.coursesService.searchValue.next(this.searchForm.value.searchValue);
  }
}
