import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  showScrollTop = false;

  @HostListener('window:scroll')
  onScroll() {
    this.showScrollTop = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  @HostListener('window:scroll')
  revealFooter() {
    const footer = document.querySelector('.reveal');
    if (!footer) return;

    const windowHeight = window.innerHeight;
    const elementTop = footer.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      footer.classList.add('active');
    }
  }
}
