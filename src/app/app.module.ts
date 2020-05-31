import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { NavListItemComponent } from './nav-list-item/nav-list-item.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { ResearchInfoComponent } from './research-info/research-info.component';
import { HonorsComponent } from './honors/honors.component';
import { TeachingComponent } from './teaching/teaching.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PersonalInfoComponent,
    NavListItemComponent,
    SectionHeaderComponent,
    ResearchInfoComponent,
    HonorsComponent,
    TeachingComponent
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
