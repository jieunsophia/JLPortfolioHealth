import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResearchInfoComponent } from './research-info/research-info.component';
import { ProfileComponent } from './profile/profile.component';
import { PublicationsComponent } from './publications/publications.component'
import { TeachingComponent } from './teaching/teaching.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'research', component: ResearchInfoComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'teaching', component: TeachingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
