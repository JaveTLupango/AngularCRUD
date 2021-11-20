import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { ToastrPageComponent } from './toastr-page/toastr-page.component';
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';

const routes: Routes = [
  {path: 'student', component:StudentComponent},,
  {path: 'swal', component: SweetAlertComponent}
  {path: 'toastr', component:ToastrPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
