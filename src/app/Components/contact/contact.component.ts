import { Component, HostListener, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.animateContactSection();
  }

  private animateContactSection() {
    // Animate contact heading with glitch effect
    this.scrollAnimation.observeAndAnimate('.contact-section h2', (element) => {
      this.scrollAnimation.glitchEffect(element as HTMLElement, 600);
    }, 0.3);

    // Animate contact form fields
    this.scrollAnimation.observeAndAnimate('.form-group', (element) => {
      anime({
        targets: element,
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad'
      });

      // Add focus glow effect
      const input = (element as HTMLElement).querySelector('input, textarea');
      if (input) {
        input.addEventListener('focus', () => {
          anime({
            targets: input,
            boxShadow: ['0 0 0 rgba(198, 255, 64, 0)', '0 0 15px rgba(198, 255, 64, 0.6)'],
            duration: 300,
            easing: 'easeOutQuad'
          });
        });

        input.addEventListener('blur', () => {
          anime({
            targets: input,
            boxShadow: '0 0 0 rgba(198, 255, 64, 0)',
            duration: 300,
            easing: 'easeOutQuad'
          });
        });
      }
    }, 0.25);

    // Animate contact info cards
    this.scrollAnimation.observeAndAnimate('.contact-info', (element) => {
      anime({
        targets: element,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 700,
        easing: 'easeOutQuad'
      });

      // Pulse effect on icons
      const icon = (element as HTMLElement).querySelector('i');
      if (icon) {
        setTimeout(() => {
          this.scrollAnimation.pulseEffect(icon as HTMLElement, 12);
        }, 300);
      }
    }, 0.2);
  }

  @HostListener('window:scroll')
    revealFooter() {
      const footer = document.querySelector('.reveal1');
      if (!footer) return;
  
      const windowHeight = window.innerHeight;
      const elementTop = footer.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        footer.classList.add('active');
      }
    }
}
