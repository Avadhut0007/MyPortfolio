import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SkillsService } from '../../services/skills.service';
import { ScrollAnimationService } from '../../services/scroll-animation.service';

declare var anime: any;

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skills: Skill[] = [];
  skillCategories: SkillCategory[] = [];

  constructor(
    private skillsService: SkillsService,
    private scrollAnimation: ScrollAnimationService
  ) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
      this.groupSkillsByCategory();
    });
  }

  ngAfterViewInit(): void {
    this.animateSkillsOnLoad();
    this.animateSkillsOnScroll();
  }

  private animateSkillsOnLoad() {
    // Animate skill cards with stagger
    setTimeout(() => {
      anime({
        targets: '.skill-card',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutQuad'
      });

      // Add hover animations
      document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
          anime({
            targets: card,
            scale: 1.1,
            rotateY: 5,
            duration: 300,
            easing: 'easeOutQuad'
          });
        });
        card.addEventListener('mouseleave', () => {
          anime({
            targets: card,
            scale: 1,
            rotateY: 0,
            duration: 300,
            easing: 'easeOutQuad'
          });
        });
      });
    }, 100);
  }

  private animateSkillsOnScroll() {
    // Animate category headers
    this.scrollAnimation.observeAndAnimate('.category-title', (element) => {
      anime({
        targets: element,
        translateX: [-50, 0],
        opacity: [0, 1],
        duration: 600,
        easing: 'easeOutQuad'
      });
    }, 0.3);

    // Animate the category divider
    this.scrollAnimation.observeAndAnimate('.category-divider', (element) => {
      anime({
        targets: element,
        width: ['0%', '80px'],
        opacity: [0, 1],
        duration: 700,
        easing: 'easeOutQuad'
      });
    }, 0.3);
  }

  groupSkillsByCategory(): void {
    // Get unique categories
    const categories = [...new Set(this.skills.map(skill => skill.category))];
    
    // Create category objects with grouped skills
    this.skillCategories = categories.map(category => ({
      name: category,
      skills: this.skills.filter(skill => skill.category === category)
    }));
  }
}
