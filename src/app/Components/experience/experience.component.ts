import { Component, HostListener, OnInit } from '@angular/core';
import { Experience } from '../../models/experience.model';
import { ExperienceService } from '../../services/experience.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperience().subscribe(data => {
      this.experiences = data;
    });
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
