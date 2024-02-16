import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-template',
  templateUrl: './paragraph-template.component.html',
})
export class ParagraphTemplateComponent {
  @Input() softskill: any;
}
