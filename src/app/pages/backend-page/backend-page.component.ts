import { Component } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-backend-page',
  templateUrl: '../showcase-template.html',
})
export class BackendPageComponent {
  page = this.service.pages[2].children[0]

  constructor (private service :PagesService) { }
}
