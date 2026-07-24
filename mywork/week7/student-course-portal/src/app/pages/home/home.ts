import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CourseCard } from '../../components/course-card/course-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CourseCard],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  studentName = 'Abhiram';

  selectedCourse = '';

  trainerName = 'Rahul Sharma';

  courseImage =
    'https://angular.io/assets/images/logos/angular/angular.svg';

  constructor() {}

  ngOnInit(): void {
    console.log('Home Component Loaded');
  }

  showWelcome() {
    alert('Welcome ' + this.studentName);
  }

  onEnroll(course: string) {
    alert('Successfully enrolled in ' + course);
  }

}