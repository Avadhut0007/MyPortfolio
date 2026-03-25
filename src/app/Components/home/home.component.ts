import { Component, AfterViewInit } from '@angular/core';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  constructor(private scrollAnimation: ScrollAnimationService) {}

  ngAfterViewInit() {
    // Orchestrate reveal animations with staggered timing
    this.animateHomeReveal();
  }

  private animateHomeReveal() {
    // 1. Animate background elements first (subtle)
    anime({
      targets: '.container-fluid::before',
      opacity: [0, 0.3],
      duration: 1200,
      easing: 'easeOutQuad'
    });

    // 2. Stagger profile card entrance
    anime({
      targets: '.profile-card',
      translateY: [80, 0],
      opacity: [0, 1],
      scale: [0.9, 1],
      duration: 900,
      delay: 200,
      easing: 'easeOutCubic'
    });

    // 3. Animate profile badge with pulse
    anime({
      targets: '.profile-badge',
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: 700,
      delay: 600,
      easing: 'easeOutBounce'
    });

    // 4. Animate profile image with advanced glow
    anime({
      targets: '.image-container',
      opacity: [0, 1],
      duration: 600,
      delay: 700,
      easing: 'easeOutQuad'
    });

    // Continuous glow effect on image
    anime({
      targets: '.profile-image',
      boxShadow: [
        '0 0 0 rgba(198, 255, 64, 0)',
        '0 0 25px rgba(198, 255, 64, 0.6)',
        '0 0 10px rgba(198, 255, 64, 0.3)'
      ],
      duration: 2500,
      loop: true,
      easing: 'easeInOutQuad'
    });

    // 5. Animate name section
    anime({
      targets: '.name-text',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 600,
      delay: 1000,
      easing: 'easeOutQuad'
    });

    // 6. Animate underline with draw effect
    anime({
      targets: '.name-underline',
      width: ['0%', '100%'],
      opacity: [0, 1],
      duration: 600,
      delay: 1100,
      easing: 'easeOutQuad'
    });

    // 7. Animate designation badge
    anime({
      targets: '.designation-badge',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 500,
      delay: 1200,
      easing: 'easeOutQuad'
    });

    // 8. Animate summary text
    anime({
      targets: '.summary-text',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 600,
      delay: 1350,
      easing: 'easeOutQuad'
    });

    // 9. Animate stat items with stagger
    anime({
      targets: '.stat-item',
      translateY: [40, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(150, { start: 1450 }),
      easing: 'easeOutQuad'
    });

    // 10. Animate stat numbers with counter effect
    setTimeout(() => {
      this.animateStatCounters();
    }, 1600);

    // 11. Animate CTA button
    anime({
      targets: '.get-in-touch',
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 700,
      delay: 1800,
      easing: 'easeOutQuad'
    });

    // 12. Animate main heading with professional title reveal
    this.animateProfessionalTitle();

    // 13. Animate description text
    anime({
      targets: '.some-desc p',
      translateY: [30, 0],
      opacity: [0, 1],
      duration: 700,
      delay: 2000,
      easing: 'easeOutQuad'
    });

    // 14. Animate feature boxes with stagger
    anime({
      targets: '.box1',
      translateX: [100, 0],
      opacity: [0, 1],
      duration: 700,
      delay: anime.stagger(200, { start: 2100 }),
      easing: 'easeOutQuad'
    });

    // Add hover effects on boxes
    document.querySelectorAll('.box1').forEach(box => {
      box.addEventListener('mouseenter', () => {
        anime({
          targets: box,
          translateY: -8,
          boxShadow: '0 10px 30px rgba(198, 255, 64, 0.3)',
          duration: 300,
          easing: 'easeOutQuad'
        });
      });

      box.addEventListener('mouseleave', () => {
        anime({
          targets: box,
          translateY: 0,
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
          duration: 300,
          easing: 'easeOutQuad'
        });
      });
    });
  }

  private animateProfessionalTitle() {
    const titleElement = document.querySelector('.software-title') as HTMLElement;
    const fullText = 'Software Developer';
    
    // Clear initial text
    titleElement.textContent = '';
    
    let currentText = '';
    let charIndex = 0;

    // Typing animation with staggered character reveals
    const typeCharacter = () => {
      if (charIndex < fullText.length) {
        currentText += fullText[charIndex];
        titleElement.textContent = currentText;
        
        // Create letter-by-letter fade-in effect
        anime({
          targets: titleElement,
          opacity: [0, 1],
          duration: 80,
          easing: 'easeInOutQuad'
        });
        
        charIndex++;
        setTimeout(typeCharacter, 70); // Smooth typing speed
      } else {
        // After typing, add subtle glow animation
        setTimeout(() => {
          this.addTitleGlowEffect();
        }, 300);
      }
    };

    // Start typing after heading animation
    setTimeout(typeCharacter, 1400);
  }

  private addTitleGlowEffect() {
    anime({
      targets: '.software-title',
      textShadow: [
        '0 0 20px rgba(198, 255, 64, 0)',
        '0 0 30px rgba(198, 255, 64, 0.6)',
        '0 0 20px rgba(198, 255, 64, 0.3)'
      ],
      duration: 2000,
      loop: true,
      easing: 'easeInOutQuad'
    });
  }

  private animateStatCounters() {
    // Animate stat numbers with counter effect
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((stat, index) => {
      const text = (stat as HTMLElement).textContent || '';
      const numberStr = text.match(/\d+/)?.[0] || '0';
      const targetNumber = parseInt(numberStr);
      const suffix = text.includes('+') ? '+' : '';

      // Create counter object
      const counter = { value: 0 };

      anime({
        targets: counter,
        value: [0, targetNumber],
        duration: 1200,
        delay: 200 + (index * 150),
        easing: 'easeOutQuad',
        round: 1,
        update() {
          (stat as HTMLElement).textContent = Math.round(counter.value) + suffix;
        }
      });
    });
  }
}
