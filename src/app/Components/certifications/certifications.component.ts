import { Component, HostListener } from '@angular/core';
import { CERTIFICATES_DATA, Certification } from './certifications.data';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = CERTIFICATES_DATA;
  selectedCertificate: Certification | null = null;

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
