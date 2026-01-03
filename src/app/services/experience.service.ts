import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Experience } from '../models/experience.model';
import { EXPERIENCE_DATA } from '../models/experience.data';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  getExperience(): Observable<Experience[]> {
    // Simulating backend API
    return of(EXPERIENCE_DATA);
  }
}
