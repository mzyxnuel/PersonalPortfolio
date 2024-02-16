import { Component } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-frontend-page',
  templateUrl: '../showcase-template.html',
})
export class FrontendPageComponent {
  page = this.service.pages[2].children[1]

  constructor (private service :PagesService) { }
}
