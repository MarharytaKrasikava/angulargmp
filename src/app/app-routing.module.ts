import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { VideoCoursesComponent } from './video-courses';
import { NewCourseComponent } from './video-courses/new-course/new-course.component';

const routes: Routes = [
  { path: '', component: VideoCoursesComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'new-course', component: NewCourseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
