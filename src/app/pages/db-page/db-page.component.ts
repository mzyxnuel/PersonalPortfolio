import { Component } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-db-page',
  templateUrl: '../showcase-template.html',
})
export class DbPageComponent {
  page = this.service.pages[2].children[2]
  
  constructor (private service :PagesService) { }
}
