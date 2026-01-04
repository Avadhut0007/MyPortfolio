import { Component, HostListener, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.getProjects();
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
