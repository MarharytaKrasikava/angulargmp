import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './video-courses/login-page/login-page.component';
import { VideoCoursesComponent } from './video-courses';
import { NewCourseComponent } from './video-courses/new-course/new-course.component';
import { PageNotFoundComponent } from './video-courses/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'courses',
    component: VideoCoursesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'courses/:id',
    component: NewCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'new-course',
    component: NewCourseComponent,
    canActivate: [AuthGuard],
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
