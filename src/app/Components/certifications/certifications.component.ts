import { Component } from '@angular/core';
import { CERTIFICATES_DATA, Certification } from './certifications.data';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  certifications: Certification[] = CERTIFICATES_DATA;

  getIssuerClass(issuer: string): string {
    const issuerLower = issuer.toLowerCase();
    if (issuerLower.includes('udemy')) return 'udemy';
    if (issuerLower.includes('hackerrank')) return 'hackerrank';
    if (issuerLower.includes('edubridge')) return 'edubridge';
    return '';
  }
}
