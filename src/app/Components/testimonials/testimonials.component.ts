import { Component } from '@angular/core';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
  testimonials: Testimonial[] = [
    {
      quote: "Avadhut delivered exceptional work on our project. His attention to detail and problem-solving skills were outstanding.",
      author: "John Doe",
      position: "Project Manager",
      company: "Tech Solutions Inc.",
      image: "assets/testimonial1.jpg"
    },
    {
      quote: "Working with Avadhut was a pleasure. He is reliable, skilled, and always delivers on time.",
      author: "Jane Smith",
      position: "CTO",
      company: "Innovate Corp.",
      image: "assets/testimonial2.jpg"
    },
    {
      quote: "Avadhut's expertise in Java and Spring Boot helped us scale our application efficiently.",
      author: "Mike Johnson",
      position: "Lead Developer",
      company: "StartupXYZ",
      image: "assets/testimonial3.jpg"
    }
  ];
}
