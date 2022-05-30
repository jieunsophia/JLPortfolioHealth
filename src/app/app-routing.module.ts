import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ResearchInfoComponent } from './research-info/research-info.component';
import { EducationComponent } from './education/education.component';
import { CVComponent } from './cv/cv.component';
import { PublicationsComponent } from './publications/publications.component'

const routes: Routes = [
  { path: '', component: ProfileInfoComponent },
  { path: 'profile', component: ProfileInfoComponent },
  { path: 'research', component: ResearchInfoComponent },
  { path: 'education', component: EducationComponent },
  { path: 'cv', component: CVComponent },
  { path: 'publications', component: PublicationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
