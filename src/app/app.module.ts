import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgxSpinnerModule } from '../../node_modules/ngx-spinner';
import { AppIntroComponent } from './app-intro/app-intro.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { HttpClientModule } from '@angular/common/http';
import { ExtraOptions } from '@angular/router';
import { ProfileService } from './profile.service';

const config: ExtraOptions =  {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppIntroComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    SnotifyModule,
  ],
  providers: [
    {  provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    ProfileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
