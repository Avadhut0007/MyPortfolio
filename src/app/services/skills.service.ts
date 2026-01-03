import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Skill } from '../models/skill.model';
import { SKILLS_DATA } from '../models/skills.data';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  getSkills(): Observable<Skill[]> {
    return of(SKILLS_DATA);
  }
}
