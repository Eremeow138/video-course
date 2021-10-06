import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from 'src/app/interfaces/course.interface';

@Component({
  selector: 'app-course-actions',
  templateUrl: './course-actions.component.html',
  styleUrls: ['./course-actions.component.scss'],
})
export class CourseActionsComponent {
  @Input() course?: ICourse;

  @Output() deleteEmitter = new EventEmitter<number>();

  delete(): void {
    if (this.course) {
      this.deleteEmitter.emit(this.course.id);
    }
  }
}
