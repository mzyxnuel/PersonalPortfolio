import { Component } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
})
export class AboutPageComponent {
  description = this.informations.description
  email = this.informations.email
  cv_file = this.informations.cv_file
  name = this.informations.name

  constructor (private informations :InformationService) { }

}
