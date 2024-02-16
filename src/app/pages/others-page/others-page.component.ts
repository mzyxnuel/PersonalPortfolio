import { Component } from '@angular/core';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-others-page',
  templateUrl: '../showcase-template.html',
})
export class OthersPageComponent {
  page = this.service.pages[2].children[3]

  constructor (private service :PagesService) { }
}
