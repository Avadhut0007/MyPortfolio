import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit, OnDestroy {

  private boxListeners: { el: Element; type: string; fn: EventListener }[] = [];
  private typeTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    this.animateHomeReveal();
  }

  ngOnDestroy() {
    this.boxListeners.forEach(({ el, type, fn }) => el.removeEventListener(type, fn));
    this.boxListeners = [];
    if (this.typeTimer) clearTimeout(this.typeTimer);
  }

  private animateHomeReveal() {
    // 1. Profile card entrance
    anime({
      targets: '.profile-card',
      translateY: [60, 0],
      opacity: [0, 1],
      scale: [0.97, 1],
      duration: 900,
      delay: 200,
      easing: 'easeOutCubic'
    });

    // 2. Available badge pop-in
    anime({
      targets: '.profile-badge',
      opacity: [0, 1],
      scale: [0.6, 1],
      duration: 600,
      delay: 600,
      easing: 'easeOutBounce'
    });

    // 3. Profile image
    anime({
      targets: '.image-container',
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 600,
      delay: 700,
      easing: 'easeOutCubic'
    });

    // Pulsing glow on image
    anime({
      targets: '.profile-image',
      boxShadow: [
        '0 0 0 rgba(198, 255, 64, 0)',
        '0 0 28px rgba(198, 255, 64, 0.55)',
        '0 0 12px rgba(198, 255, 64, 0.25)'
      ],
      duration: 2800,
      loop: true,
      easing: 'easeInOutQuad'
    });

    // 4. Name
    anime({
      targets: '.name-text',
      translateY: [24, 0],
      opacity: [0, 1],
      duration: 550,
      delay: 950,
      easing: 'easeOutQuad'
    });

    // 5. Underline draw
    anime({
      targets: '.name-underline',
      width: ['0%', '60%'],
      opacity: [0, 1],
      duration: 550,
      delay: 1050,
      easing: 'easeOutQuad'
    });

    // 6. Role badge
    anime({
      targets: '.designation-badge',
      translateY: [16, 0],
      opacity: [0, 1],
      duration: 480,
      delay: 1150,
      easing: 'easeOutQuad'
    });

    // 7. Bio
    anime({
      targets: '.summary-text',
      translateY: [16, 0],
      opacity: [0, 1],
      duration: 550,
      delay: 1280,
      easing: 'easeOutQuad'
    });

    // 8. Stats stagger
    anime({
      targets: '.stat-item',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 550,
      delay: anime.stagger(130, { start: 1380 }),
      easing: 'easeOutQuad'
    });

    // Counter animation for stat numbers
    this.typeTimer = setTimeout(() => this.animateStatCounters(), 1500);

    // 9. CTA
    anime({
      targets: '.get-in-touch',
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 650,
      delay: 1700,
      easing: 'easeOutQuad'
    });

    // 10. Typed role title (right column)
    this.animateProfessionalTitle();

    // 11. Description
    anime({
      targets: '.some-desc p',
      translateY: [24, 0],
      opacity: [0, 1],
      duration: 650,
      delay: 1950,
      easing: 'easeOutQuad'
    });

    // 12. Tech chips stagger from right
    anime({
      targets: '.box1',
      translateX: [60, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(80, { start: 2100 }),
      easing: 'easeOutQuad'
    });

    // Chip hover effects (tracked for ngOnDestroy cleanup)
    document.querySelectorAll('.box1').forEach(box => {
      const onEnter: EventListener = () => {
        anime({
          targets: box,
          translateY: -5,
          boxShadow: '0 8px 24px rgba(198, 255, 64, 0.2)',
          borderColor: 'rgba(198, 255, 64, 0.35)',
          duration: 250,
          easing: 'easeOutQuad'
        });
      };
      const onLeave: EventListener = () => {
        anime({
          targets: box,
          translateY: 0,
          boxShadow: '0 0 0 rgba(198, 255, 64, 0)',
          borderColor: 'rgba(255, 255, 255, 0.09)',
          duration: 250,
          easing: 'easeOutQuad'
        });
      };
      box.addEventListener('mouseenter', onEnter);
      box.addEventListener('mouseleave', onLeave);
      this.boxListeners.push(
        { el: box, type: 'mouseenter', fn: onEnter },
        { el: box, type: 'mouseleave', fn: onLeave }
      );
    });
  }

  // Cycles through developer roles with a typing + erasing effect
  private animateProfessionalTitle() {
    const titleEl = document.querySelector('.software-title') as HTMLElement;
    if (!titleEl) return;

    const roles = [
      'Software Developer',
      '.NET Developer',
      'Full-Stack Engineer',
      'Angular Developer',
    ];
    let roleIndex = 0;

    const typeRole = (text: string, onDone: () => void) => {
      titleEl.textContent = '';
      anime({ targets: titleEl, opacity: [0, 1], duration: 200, easing: 'easeOutQuad' });
      let i = 0;
      const tick = () => {
        if (i < text.length) {
          titleEl.textContent += text[i++];
          this.typeTimer = setTimeout(tick, 65);
        } else {
          this.typeTimer = setTimeout(onDone, 2200);
        }
      };
      tick();
    };

    const eraseRole = (onDone: () => void) => {
      let text = titleEl.textContent ?? '';
      const tick = () => {
        if (text.length > 0) {
          text = text.slice(0, -1);
          titleEl.textContent = text;
          this.typeTimer = setTimeout(tick, 35);
        } else {
          this.typeTimer = setTimeout(onDone, 250);
        }
      };
      tick();
    };

    const cycle = () => {
      typeRole(roles[roleIndex], () => {
        eraseRole(() => {
          roleIndex = (roleIndex + 1) % roles.length;
          cycle();
        });
      });
    };

    this.typeTimer = setTimeout(cycle, 1400);
  }

  private animateStatCounters() {
    document.querySelectorAll('.stat-number').forEach((stat, index) => {
      const text = (stat as HTMLElement).textContent || '';
      const numberStr = text.match(/\d+/)?.[0] || '0';
      const target = parseInt(numberStr);
      const suffix = text.includes('+') ? '+' : '';
      const counter = { value: 0 };

      anime({
        targets: counter,
        value: [0, target],
        duration: 1200,
        delay: 180 + index * 130,
        easing: 'easeOutQuad',
        round: 1,
        update() {
          (stat as HTMLElement).textContent = Math.round(counter.value) + suffix;
        }
      });
    });
  }
}
