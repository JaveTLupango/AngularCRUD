import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CkeditorComponent } from './ckeditor/ckeditor.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path: 'student', component:StudentComponent},
  {path: 'ckeditor', component:CkeditorComponent}
  ///
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
