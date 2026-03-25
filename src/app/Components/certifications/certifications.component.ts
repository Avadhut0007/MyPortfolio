import { Component, HostListener, AfterViewInit } from '@angular/core';
import { CERTIFICATES_DATA, Certification } from './certifications.data';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent implements AfterViewInit {
  certifications: Certification[] = CERTIFICATES_DATA;
  selectedCertificate: Certification | null = null;

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.animateCertificationsOnScroll();
  }

  private animateCertificationsOnScroll() {
    // Animate certification cards with flip effect
    this.scrollAnimation.observeAndAnimate('.certification-card', (element) => {
      anime({
        targets: element,
        rotateY: [90, 0],
        translateZ: 0,
        opacity: [0, 1],
        duration: 700,
        easing: 'easeOutQuad'
      });

      // Add pulse to issuer badge
      const badge = (element as HTMLElement).querySelector('.issuer-badge');
      if (badge) {
        setTimeout(() => {
          this.scrollAnimation.pulseEffect(badge as HTMLElement, 10);
        }, 400);
      }
    }, 0.25);
  }

  getIssuerClass(issuer: string): string {
    const issuerLower = issuer.toLowerCase();
    if (issuerLower.includes('udemy')) return 'udemy';
    if (issuerLower.includes('hackerrank')) return 'hackerrank';
    if (issuerLower.includes('edubridge')) return 'edubridge';
    return '';
  }

  /**
   * Open certificate in modal view
   */
  viewCertificate(cert: Certification): void {
    this.selectedCertificate = cert;
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Animate modal appearance
    setTimeout(() => {
      const modal = document.querySelector('.certificate-modal');
      if (modal) {
        anime({
          targets: modal,
          scale: [0.8, 1],
          opacity: [0, 1],
          duration: 400,
          easing: 'easeOutQuad'
        });
      }
    }, 100);
  }

  /**
   * Close certificate modal
   */
  closeCertificateModal(): void {
    this.selectedCertificate = null;
    // Restore body scroll
    document.body.style.overflow = 'auto';
  }

  /**
   * Close modal on Escape key press
   */
  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    this.closeCertificateModal();
  }

  @HostListener('window:scroll')
  revealFooter() {
    const footer = document.querySelector('.reveal2');
    if (!footer) return;
    
    const windowHeight = window.innerHeight;
    const elementTop = footer.getBoundingClientRect().top;
    
    if (elementTop < windowHeight - 100) {
      footer.classList.add('active');
    }
  }
}
