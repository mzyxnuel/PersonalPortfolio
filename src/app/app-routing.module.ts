import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { BackendPageComponent } from './pages/backend-page/backend-page.component';
import { FrontendPageComponent } from './pages/frontend-page/frontend-page.component';
import { DbPageComponent } from './pages/db-page/db-page.component';
import { SoftSkillsPageComponent } from './pages/soft-skills-page/soft-skills-page.component';
import { OthersPageComponent } from './pages/others-page/others-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
  { path: 'soft-skills', component: SoftSkillsPageComponent },
  { path: 'backend', component: BackendPageComponent },
  { path: 'frontend', component: FrontendPageComponent },
  { path: 'db', component: DbPageComponent },
  { path: 'others', component: OthersPageComponent },
  { path: '**', redirectTo: 'about' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
