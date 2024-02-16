import { Component } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: '../showcase-template.html'
})
export class ProjectsPageComponent {
  page = this.service.pages[1]
  
  constructor (private service :PagesService) { }
}
