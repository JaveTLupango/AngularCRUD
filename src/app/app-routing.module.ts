import { UploadImageComponent } from './upload-image/upload-image.component';
import { ParentComponent } from './parent/parent.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'parentchild', component:ParentComponent},
  {path: 'UploadImage', component:UploadImageComponent}
  ///
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
