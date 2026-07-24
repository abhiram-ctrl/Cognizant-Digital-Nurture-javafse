import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighlightDirective } from '../../directives/highlight';
import { CreditLabelPipe } from '../../pipes/credit-label';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [
    CommonModule,
    HighlightDirective,
    CreditLabelPipe
  ],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {

  showCourses = true;

  selectedCategory = 'Programming';

  courses = [

    {
      name: 'Angular',
      credits: 4,
      completed: true
    },

    {
      name: 'Spring Boot',
      credits: 5,
      completed: false
    },

    {
      name: 'React',
      credits: 3,
      completed: true
    }

  ];

}