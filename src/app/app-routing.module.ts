import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProjectsPageComponent } from './single-projects-page/single-projects-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: "single-page", component: SingleProjectsPageComponent },
    { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
