import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../services/experience.service';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit, AfterViewInit {

  experiences: Experience[] = [];

  constructor(
    private experienceService: ExperienceService,
    private scrollAnimation: ScrollAnimationService
  ) {}

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data => {
      this.experiences = data;
    });
  }

  ngAfterViewInit(): void {
    // Animate timeline items on scroll
    this.animateTimelineOnScroll();
  }

  private animateTimelineOnScroll() {
    this.scrollAnimation.observeAndAnimate('.timeline-item', (element) => {
      anime({
        targets: element,
        translateX: (element as HTMLElement).classList.contains('left') ? [-100, 0] : [100, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeOutQuad'
      });

      // Animate timeline dot with glow
      const dot = (element as HTMLElement).querySelector('.timeline-dot');
      if (dot) {
        anime({
          targets: dot,
          scale: [0, 1],
          boxShadow: ['0 0 0 rgba(198, 255, 64, 0)', '0 0 15px rgba(198, 255, 64, 0.8)'],
          duration: 600,
          easing: 'easeOutQuad'
        });
      }

      // Animate tech stack tags
      const techTags = (element as HTMLElement).querySelectorAll('.tech-stack span');
      if (techTags.length > 0) {
        anime({
          targets: techTags,
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 500,
          delay: anime.stagger(80),
          easing: 'easeOutQuad'
        });
      }
    }, 0.3);
  }

  @HostListener('window:scroll')
    revealFooter() {
      const footer = document.querySelector('.reveal5');
      if (!footer) return;
  
      const windowHeight = window.innerHeight;
      const elementTop = footer.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        footer.classList.add('active');
      }
    }
}
