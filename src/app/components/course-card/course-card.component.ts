import { Component, Input } from '@angular/core';
import { ICourse } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() course?: ICourse;

  // eslint-disable-next-line class-methods-use-this
  onDeleted(id: number): void {
    console.log(id);
  }
}
