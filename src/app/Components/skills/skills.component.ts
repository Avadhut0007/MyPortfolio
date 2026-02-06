import { Component, OnInit } from '@angular/core';
import { Skill } from '../../models/skill.model';
import { SkillsService } from '../../services/skills.service';

interface SkillCategory {
  name: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [];
  skillCategories: SkillCategory[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit(): void {
    this.skillsService.getSkills().subscribe(data => {
      this.skills = data;
      this.groupSkillsByCategory();
    });
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
