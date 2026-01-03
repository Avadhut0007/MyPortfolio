import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../Components/projects/project.model';
import { PROJECTS_DATA } from '../Components/projects/projects.data';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'http://localhost:8080/api/projects';

  constructor(private http: HttpClient) {}

  // getAllProjects() {
  //   return this.http.get<any[]>(this.apiUrl);
  // }
   getAllProjects(): Observable<Project[]> {
    // Simulating API call
    return of(PROJECTS_DATA);
  }
}
