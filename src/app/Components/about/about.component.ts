import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit(): void {
    this.animateAboutSection();
  }

  private animateAboutSection() {
    // Animate about card
    this.scrollAnimation.observeAndAnimate('.about-card', (element) => {
      anime({
        targets: element,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
      });

      // Glow effect on highlights
      const highlights = (element as HTMLElement).querySelectorAll('.highlight');
      highlights.forEach((highlight, index) => {
        anime({
          targets: highlight,
          backgroundColor: ['transparent', 'rgba(198, 255, 64, 0.2)', 'transparent'],
          duration: 2000,
          delay: 400 + (index * 300),
          loop: false,
          easing: 'easeInOutQuad'
        });
      });
    }, 0.2);

    // Animate education card
    this.scrollAnimation.observeAndAnimate('.education-card', (element) => {
      anime({
        targets: element,
        translateX: [100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
      });

      // Animate education items
      const eduItems = (element as HTMLElement).querySelectorAll('.education-item');
      if (eduItems.length > 0) {
        anime({
          targets: eduItems,
          translateY: [50, 0],
          opacity: [0, 1],
          duration: 600,
          delay: anime.stagger(150),
          easing: 'easeOutQuad'
        });
      }

      // Pulse edu icons
      const eduIcons = (element as HTMLElement).querySelectorAll('.edu-icon');
      eduIcons.forEach((icon) => {
        this.scrollAnimation.pulseEffect(icon as HTMLElement, 15);
      });
    }, 0.2);
  }
}
