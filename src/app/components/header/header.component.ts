import { Component } from '@angular/core';
import { InformationService } from 'src/app/services/information.service';
import { MobileHeaderComponent } from '../mobile-header/mobile-header.component';
import { style } from '@angular/animations';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  pages = this.service.pages
  socials = this.informations.socials
  logo = this.informations.logo

  isHidden = true;
  toggleDropdown() { this.isHidden = !this.isHidden }
  toggleIfIsActive() { if (!this.isHidden) this.toggleDropdown() }
  showMobileHeader() {
    let mobileheader = document.getElementById('mobile-header');
    let hideBtn = document.getElementById('hideBtn')

    if (mobileheader && hideBtn) { 
      mobileheader.classList.remove('hidden') 
      hideBtn.style.display = 'block'
    }
  }
  scrollOnTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
  
  constructor (private informations :InformationService, private service :PagesService) { }
}
