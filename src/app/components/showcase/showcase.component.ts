import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
})
export class ShowcaseComponent {
  @Input() page :any;
}
