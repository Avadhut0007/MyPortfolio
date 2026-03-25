import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';

declare var anime: any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, AfterViewInit {

  projects: any[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  ngAfterViewInit(): void {
    // Animate project cards on scroll
    this.animateOnScroll();
  }

  getProjects() {
    this.projectService.getAllProjects().subscribe({
      next: (res) => {
        this.projects = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  private animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            easing: 'easeOutQuad'
          });
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
      });
    }, 100);
  }

  @HostListener('window:scroll')
    revealFooter() {
      const footer = document.querySelector('.reveal3');
      if (!footer) return;
  
      const windowHeight = window.innerHeight;
      const elementTop = footer.getBoundingClientRect().top;
  
      if (elementTop < windowHeight - 100) {
        footer.classList.add('active');
      }
    }
}
