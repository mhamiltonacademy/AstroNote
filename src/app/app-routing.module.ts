import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProjectsPageComponent } from './single-projects-page/single-projects-page.component';

const routes: Routes = [
    { path: "single-page", component: SingleProjectsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
