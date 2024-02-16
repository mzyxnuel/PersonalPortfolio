import { Component } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-mobile-header',
  templateUrl: './mobile-header.component.html',
})
export class MobileHeaderComponent {
  pages = this.service.pages
  socials = this.informations.socials
  isHidden = true;

  hideMobileHeader() {
    let mobileheader = document.getElementById('mobile-header');
    let hideBtn = document.getElementById('hideBtn')

    if (mobileheader && hideBtn) { 
      mobileheader.classList.add('hidden') 
      hideBtn.style.display = 'none'
    }
  }
  toggleSubMenu() { this.isHidden = !this.isHidden }
  scrollOnTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  
  constructor (private informations :InformationService, private service :PagesService) { }
}
