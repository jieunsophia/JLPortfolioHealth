import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ResearchInfoComponent } from './research-info/research-info.component';
import { ProfileComponent } from './profile/profile.component';
import { CVComponent } from './cv/cv.component';
import { PublicationsComponent } from './publications/publications.component';
import { HomeComponent } from './home/home.component';
import { TeachingComponent } from './teaching/teaching.component';
import { ThesisChaptersComponent } from './thesis-chapters/thesis-chapters.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ProfileComponent,
    NavListItemComponent,
    SectionHeaderComponent,
    ResearchInfoComponent,
    CVComponent,
    PublicationsComponent,
    HomeComponent,
    TeachingComponent,
    ThesisChaptersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
