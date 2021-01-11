import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { SpinnerService } from './shared/services/spinner.service';
import { debounce } from 'rxjs/operators';
import { VideoCoursesService } from './shared/services/video-courses-service/video-courses.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  public showSpinner: boolean;
  public showSpinnerSubscription: Subscription;
  public title: string = 'video-course-app';

  constructor(
    private spinnerService: SpinnerService,
    private translateService: TranslateService,
    private coursesService: VideoCoursesService
  ) {
    this.showSpinnerSubscription = this.spinnerService.show
      .pipe(debounce(() => interval(100)))
      .subscribe((show) => {
        this.showSpinner = show;
      });
  }

  public ngOnInit(): void {
    this.coursesService.getCourses();
    this.translateService.use(environment.defaultLocale);
  }

  public ngOnDestroy(): void {
    this.showSpinnerSubscription.unsubscribe();
  }
}
