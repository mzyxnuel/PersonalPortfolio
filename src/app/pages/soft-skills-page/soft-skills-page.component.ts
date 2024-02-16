import { Component } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';

@Component({
  selector: 'app-soft-skills-page',
  templateUrl: './soft-skills-page.component.html',
})
export class SoftSkillsPageComponent {
  softskills = this.informations.softskills
  softskills_description = this.informations.softskills_description

  constructor (private informations :InformationService) { }
}
