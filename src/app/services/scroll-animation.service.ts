import { Injectable } from '@angular/core';

declare var anime: any;

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {

  constructor() { }

  /**
   * Animate counter from 0 to target number
   */
  animateCounter(element: HTMLElement, targetValue: number, duration: number = 2000) {
    const parts = element.textContent?.split('+') || [];
    const suffix = parts[1] ? '+' : '';
    
    anime({
      targets: { value: 0 },
      value: targetValue,
      duration: duration,
      easing: 'easeOutExpo',
      round: 1,
      update(anim: any) {
        element.textContent = Math.floor(anim.progress * targetValue) + suffix;
      }
    });
  }

  /**
   * Stagger animation for list items
   */
  staggerElements(selector: string, options: any = {}) {
    const defaults = {
      targets: selector,
      translateY: [50, 0],
      opacity: [0, 1],
      duration: 600,
      delay: anime.stagger(100),
      easing: 'easeOutQuad',
      ...options
    };

    return anime(defaults);
  }

  /**
   * Glow/Pulse effect
   */
  pulseEffect(element: HTMLElement, intensity: number = 20) {
    anime({
      targets: element,
      boxShadow: [
        `0 0 0 rgba(198, 255, 64, 0)`,
        `0 0 ${intensity}px rgba(198, 255, 64, 0.8)`
      ],
      duration: 2000,
      loop: true,
      easing: 'easeInOutQuad'
    });
  }

  /**
   * Rotate animation (like spinning gears/cogs)
   */
  rotateEffect(element: HTMLElement, duration: number = 3000, loop: boolean = true) {
    anime({
      targets: element,
      rotate: 360,
      duration: duration,
      loop: loop,
      easing: 'linear'
    });
  }

  /**
   * Code typing effect - simulates code being typed
   */
  typeCodeEffect(element: HTMLElement, codeText: string, speed: number = 50) {
    element.textContent = '';
    let index = 0;

    const typeChar = () => {
      if (index < codeText.length) {
        element.textContent += codeText[index];
        index++;
        setTimeout(typeChar, speed);
      }
    };

    typeChar();
  }

  /**
   * Progress bar animation
   */
  animateProgressBar(element: HTMLElement, percentage: number, duration: number = 1500) {
    anime({
      targets: element,
      width: `${percentage}%`,
      duration: duration,
      easing: 'easeOutQuad'
    });
  }

  /**
   * Observe element and trigger animation when in view
   */
  observeAndAnimate(selector: string, animationFn: (element: Element) => void, threshold: number = 0.2) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animationFn(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }

  /**
   * Glitch effect - tech/digital feel
   */
  glitchEffect(element: HTMLElement, duration: number = 500) {
    anime({
      targets: element,
      keyframes: [
        { filter: 'hue-rotate(0deg) skewX(0deg)', translateX: 0 },
        { filter: 'hue-rotate(45deg) skewX(-2px)', translateX: -2 },
        { filter: 'hue-rotate(90deg) skewX(2px)', translateX: 2 },
        { filter: 'hue-rotate(0deg) skewX(0deg)', translateX: 0 }
      ],
      duration: duration,
      easing: 'easeInOutQuad'
    });
  }

  /**
   * Data flow animation (simulating data packets)
   */
  dataFlowAnimation(element: HTMLElement) {
    anime({
      targets: element,
      keyframes: [
        { opacity: 0, translateY: 50 },
        { opacity: 1, translateY: 0 },
        { opacity: 0, translateY: -50 }
      ],
      duration: 2000,
      loop: true,
      easing: 'easeInOutQuad'
    });
  }

  /**
   * Draw line animation (for timelines, connections)
   */
  drawLineAnimation(element: SVGElement) {
    const length = (element as any).getTotalLength?.() || 0;
    
    anime({
      targets: element,
      strokeDashoffset: [length, 0],
      duration: 2000,
      easing: 'easeInOutQuad'
    });
  }

  /**
   * Binary code rain effect
   */
  binaryRainEffect(container: HTMLElement) {
    const binaryChars = ['0', '1'];
    const chars = Array.from({ length: 50 }, () => 
      binaryChars[Math.floor(Math.random() * 2)]
    ).join('');

    container.textContent = chars;

    anime({
      targets: container,
      opacity: [0, 1, 0],
      duration: 3000,
      loop: true,
      easing: 'easeInOutQuad'
    });
  }
}
