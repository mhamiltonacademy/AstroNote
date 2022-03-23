import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SingleProjectsPageComponent } from './single-projects-page/single-projects-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'signup', component: SignUpComponent},
  { path: "single-page", component: SingleProjectsPageComponent },
  { path: "**", component: PageNotFoundComponent }
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
