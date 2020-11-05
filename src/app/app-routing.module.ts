import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoCoursesComponent } from './video-courses';

const routes: Routes = [
  { path: '', component: VideoCoursesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
