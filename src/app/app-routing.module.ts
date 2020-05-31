import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ResearchInfoComponent } from './research-info/research-info.component';
import { HonorsComponent } from './honors/honors.component';
import { TeachingComponent } from './teaching/teaching.component';


const routes: Routes = [
  { path: '', component: PersonalInfoComponent },
  { path: 'personalInfo', component: PersonalInfoComponent },
  { path: 'research', component: ResearchInfoComponent },
  { path: 'honors', component: HonorsComponent },
  { path: 'teaching', component: TeachingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
