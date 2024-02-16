import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { HeaderComponent } from './components/header/header.component';
import { DemoComponent } from './components/demo/demo.component';
import { IllustrationComponent } from './components/illustration/illustration.component';
import { MobileHeaderComponent } from './components/mobile-header/mobile-header.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { BackendPageComponent } from './pages/backend-page/backend-page.component';
import { FrontendPageComponent } from './pages/frontend-page/frontend-page.component';
import { DbPageComponent } from './pages/db-page/db-page.component';
import { ParagraphTemplateComponent } from './components/paragraph-template/paragraph-template.component';
import { SoftSkillsPageComponent } from './pages/soft-skills-page/soft-skills-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';
import { ExperiencePageComponent } from './pages/experience-page/experience-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BadgeComponent } from './components/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    HeaderComponent,
    DemoComponent,
    IllustrationComponent,
    MobileHeaderComponent,
    ShowcaseComponent,
    BackendPageComponent,
    FrontendPageComponent,
    DbPageComponent,
    ParagraphTemplateComponent,
    SoftSkillsPageComponent,
    OthersPageComponent,
    ExperiencePageComponent,
    ContactPageComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
